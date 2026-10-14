from pydantic import BaseModel, Field
from typing import List, Optional

class TextAnalysisRequest(BaseModel):
    text: str = Field(..., description="Message, email body, call transcript, or any text to analyze.")

class AnalysisResult(BaseModel):
    risk: str = Field(..., description="Risk level: HIGH, MEDIUM, LOW, or UNKNOWN")
    confidence: float = Field(..., ge=0.0, le=1.0, description="Confidence score (0‑1)")
    indicators: List[str] = Field(..., description="Detected scam‑related keywords or patterns")
    explanation: str = Field(..., description="Human‑readable explanation of why the risk was assigned")
    recommendation: str = Field(..., description="Suggested safe actions for the user")

class UrlAnalysisRequest(BaseModel):
    url: str = Field(..., description="URL string to evaluate")

class UrlAnalysisResult(AnalysisResult):
    # Inherit all fields; optionally add more later
    pass
