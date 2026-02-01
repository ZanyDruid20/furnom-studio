from fastapi import APIRouter, HTTPException
from app.services.github_service import GitHubService
from app.db.session import get_supabase

# create router and github service instance
router = APIRouter()
github_service = GitHubService()

# Async Function to fetch repos from github and return them as JSON
@router.get("/repos")
async def get_repositories():
    try:
        repos = await github_service.fetch_user_repos()
        tech_map = {
            "Studivio": ["Python", "JavaScript", "Flask", "MongoDB", "React"],
            "URLShortener": ["Golang", "Redis", "MySQL", "AWS EC2", "AWS RDS", "Gin Web Framework"],
            "GEPO": [
                "JavaScript", "TypeScript", "Node.js", "Express.js", "Next.js", "GraphQL", "Passport.js", "Tailwind CSS", "GCP (Backend hosting)",
                "Vercel (frontend hosting)", "GitHub Actions (CI/CD)", "Docker"
            ],
            "accessibility-map-team3": ["FastAPI", "Python", "MySQL", "Docker", "JavaScript", "Railway"],
            "Chip8Emulator": ["C", "C++"],
            "EventApp": ["C++"]
        }
        for repo in repos:
            repo["techStack"] = tech_map.get(repo["name"], [])
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
    