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
from datetime import datetime, timedelta

class GitHubService:
    def __init__(self):
        self.base_url = "https://api.github.com"
        self.headers = {"Accept": "application/vnd.github.v3+json"}
        self._cache = None
        self._cache_time = None
        # Aggressive caching: 30 minutes to avoid rate limits
        self._cache_duration = timedelta(minutes=30)
    
    async def fetch_user_repos(self, username: str = None) -> List[Dict[str,any]]:
        # Return cached data if still valid (aggressive caching)
        if self._cache and self._cache_time:
            if datetime.now() - self._cache_time < self._cache_duration:
                return self._cache
        
        username = username or settings.GITHUB_USERNAME
        url = f"{self.base_url}/users/{username}/repos"
        # Faster timeout and connection pooling
        async with httpx.AsyncClient(
            timeout=8.0,
            limits=httpx.Limits(max_connections=10, max_keepalive_connections=5)
        ) as client:
            response = await client.get(url, headers=self.headers)
            response.raise_for_status()
            repos = response.json()
            # Only include whitelisted projects (reduces payload size)
            filtered = [repo for repo in repos if repo["name"] in INCLUDED_PROJECTS]
            
            # Cache the results for 30 minutes
            self._cache = filtered
            self._cache_time = datetime.now()
            
            return filtered
    
