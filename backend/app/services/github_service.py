INCLUDED_PROJECTS = [
    "EventApp",
    "Studivio",
    "Chip8Emulator",
    "URLShortener",
    "accessibility-map-team3",
    "GEPO"
]
import httpx # type: ignore
from app.core.settings import settings
from typing import List, Dict, Any 

class GitHubService:
    def __init__(self):
        self.base_url = "https://api.github.com"
        self.headers = {"Accept": "application/vnd.github.v3+json"}
    async def fetch_user_repos(self, username: str = None) -> List[Dict[str,any]]:
        username = username or settings.GITHUB_USERNAME
        url = f"{self.base_url}/users/{username}/repos"
        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=self.headers)
            response.raise_for_status()
            repos = response.json()
            # Only include whitelisted projects
            filtered = [repo for repo in repos if repo["name"] in INCLUDED_PROJECTS]
            return filtered
    
