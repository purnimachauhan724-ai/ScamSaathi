from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from app.schemas.analysis import TextAnalysisRequest, AnalysisResult
from app.detectors.rule_based import analyze_text

router = APIRouter()

@router.post("/message", response_model=AnalysisResult, status_code=status.HTTP_200_OK)
async def analyze_message(payload: TextAnalysisRequest):
    result = analyze_text(payload.text)
    return result
