from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.settings import settings
from app.api.v1.api import api_router
from app.services.github_service import GitHubService

app = FastAPI(
    title=settings.APP_NAME,
    debug=settings.DEBUG
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api_router)

# Warm up the GitHub service cache on startup to avoid cold starts
@app.on_event("startup")
async def startup_event():
    try:
        github_service = GitHubService()
        await github_service.fetch_user_repos()
        print("✓ GitHub service cache warmed up on startup")
    except Exception as e:
        print(f"⚠ Warning: Could not warm up cache on startup: {e}")

@app.get("/")
async def root():
    return {"message": "Furnom Studio API is running"}

@app.get("/health")
async def health():
    """Health check endpoint to keep the backend warm and monitor status"""
    return {"status": "ok"}