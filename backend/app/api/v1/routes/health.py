from fastapi import APIRouter
# create router
router = APIRouter()

# create the health function to chrck the program's health
@router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "Furnom Studio API"
    }