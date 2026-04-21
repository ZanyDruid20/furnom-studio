from fastapi import APIRouter, HTTPException
from app.services.github_service import GitHubService
from app.db.session import get_supabase
from app.core.featured_projects import FEATURED_PROJECTS

# create router and github service instance
router = APIRouter()
github_service = GitHubService()

# Async Function to fetch repos from github and return them as JSON
@router.get("/repos")
async def get_repositories():
    try:
        repos = await github_service.fetch_user_repos()
        for repo in repos:
            project_config = FEATURED_PROJECTS.get(repo["name"], {})
            repo["techStack"] = project_config.get("techStack", [])

            # Optional description override from config when needed
            description_override = project_config.get("description")
            if description_override:
                repo["description"] = description_override

            # Use GitHub description as-is; fallback if missing
            if not repo.get("description") or repo["description"].strip() == "":
                repo["description"] = "No description provided"
        return {"repos": repos}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
# Async function to fetch repos and upsert them into supabase
# return the number of synced projects

@router.post("/sync")
async def sync_repositories():
    try:
        supabase = get_supabase()
        repos = await github_service.fetch_user_repos()
        from app.services.ai_service import AIService
        ai_service = AIService()
        synced = []
        for repo in repos:
            # If description is missing or empty, generate one
            description = repo.get("description")
            if not description or description.strip() == "" or description.strip() == "No description provided":
                try:
                    description = await ai_service.generate_project_description(
                        repo["name"], repo.get("description"), repo.get("language")
                    )
                except Exception as e:
                    description = "No description available."
            result = supabase.table("projects").upsert({
                "github_id": repo['id'],
                "name": repo["name"],
                "description": description,
                "github_url": repo["html_url"],
                "language": repo.get("language"),
            }).execute()
            synced.append(result.data)
        return {"synced": len(synced), "projects": synced}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    