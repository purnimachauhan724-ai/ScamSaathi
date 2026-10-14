from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from app.schemas.analysis import UrlAnalysisRequest, UrlAnalysisResult
import re
import urllib.parse

router = APIRouter()

def _is_ip(host: str) -> bool:
    return bool(re.fullmatch(r"(?:\d{1,3}\.){3}\d{1,3}", host))

def _is_shortener(domain: str) -> bool:
    shorteners = {"bit.ly", "tinyurl.com", "t.co", "goo.gl", "ow.ly", "buff.ly"}
    return domain.lower() in shorteners

def _suspicious_subdomains(url: str) -> bool:
    # detect many subdomains like a.b.c.example.com
    parts = url.split('.')
    return len(parts) > 4

def analyze_url(url: str) -> dict:
    try:
        parsed = urllib.parse.urlparse(url)
        host = parsed.hostname or ""
    except Exception:
        return {"risk": "HIGH", "confidence": 0.9, "indicators": ["malformed"],
                "explanation": "URL cannot be parsed.",
                "recommendation": "Do not click this link; it may be malicious."}
    indicators = []
    if not parsed.scheme or not host:
        indicators.append("malformed")
    if _is_ip(host):
        indicators.append("ip‑address host")
    if _is_shortener(host):
        indicators.append("url shortener")
    if _suspicious_subdomains(host):
        indicators.append("many subdomains")
    # simple look‑alike detection – repeated characters or hyphens
    if re.search(r"[a-z0-9]{2,}\-\-", host):
        indicators.append("suspicious hyphens")
    # Determine risk
    if "malformed" in indicators:
        risk = "HIGH"
        confidence = 0.9
    elif any(i in indicators for i in ["ip‑address host", "url shortener", "many subdomains", "suspicious hyphens"]):
        risk = "MEDIUM"
        confidence = 0.7
    else:
        risk = "LOW"
        confidence = 0.4
    explanation = f"Detected indicators: {', '.join(indicators) or 'none'}"
    recommendation = (
        "Avoid clicking this link; verify with the source before proceeding."
        if risk in ("HIGH", "MEDIUM")
        else "Link appears benign, but stay cautious."
    )
    return {
        "risk": risk,
        "confidence": confidence,
        "indicators": indicators,
        "explanation": explanation,
        "recommendation": recommendation,
    }

@router.post("/url", response_model=UrlAnalysisResult, status_code=status.HTTP_200_OK)
async def analyze_url_endpoint(payload: UrlAnalysisRequest):
    result = analyze_url(payload.url)
    return result
