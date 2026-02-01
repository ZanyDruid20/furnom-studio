from fastapi import APIRouter
from app.api.v1.routes import github, webhooks, health

api_router = APIRouter()

api_router.include_router(github.router, prefix="/github", tags=["github"])
api_router.include_router(webhooks.router, prefix="/webhooks", tags=["webhooks"])
api_router.include_router(health.router, prefix="/health", tags=["health"])
