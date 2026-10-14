from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/health", response_class=JSONResponse, status_code=status.HTTP_200_OK)
async def health_check():
    """Simple health endpoint returning service status."""
    return {"status": "ok", "service": "ScamSaathi Backend"}
