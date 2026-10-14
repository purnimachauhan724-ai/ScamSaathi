import re
from typing import List, Dict

# Simple keyword lists for demonstration
HIGH_INDICATORS = [
    "otp",
    "pin",
    "password",
    "bank",
    "official",
    "transfer",
    "payment",
    "money",
    "scam",
    "fraud",
]
MEDIUM_INDICATORS = [
    "urgent",
    "immediate",
    "verify",
    "login",
    "account",
    "click",
    "link",
]

def _find_matches(text: str, keywords: List[str]) -> List[str]:
    matches = []
    lowered = text.lower()
    for kw in keywords:
        if re.search(r"\\b" + re.escape(kw) + r"\\b", lowered):
            matches.append(kw)
    return matches

def analyze_text(text: str) -> Dict:
    """Very lightweight rule‑based scam detector.
    Returns a dict with keys: risk, confidence, indicators, explanation, recommendation.
    """
    high_matches = _find_matches(text, HIGH_INDICATORS)
    medium_matches = _find_matches(text, MEDIUM_INDICATORS)

    indicators = high_matches + medium_matches
    # Determine risk level based on count and type of matches
    if len(high_matches) >= 2:
        risk = "HIGH"
        confidence = 0.9
    elif len(high_matches) == 1:
        risk = "MEDIUM"
        confidence = 0.7
    elif len(medium_matches) >= 2:
        risk = "MEDIUM"
        confidence = 0.6
    else:
        risk = "LOW"
        confidence = 0.4

    explanation = (
        f"Detected keywords: {', '.join(indicators)}. "
        f"{'Multiple strong indicators' if risk == 'HIGH' else ''}"
    )
    recommendation = (
        "Do NOT share personal data, OTP, or click links. Verify the sender through an official channel."
        if risk in ("HIGH", "MEDIUM")
        else "Message appears harmless, but stay vigilant."
    )
    return {
        "risk": risk,
        "confidence": confidence,
        "indicators": indicators,
        "explanation": explanation,
        "recommendation": recommendation,
    }
