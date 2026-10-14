from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.health import router as health_router
from app.api.routes.message import router as message_router
from app.api.routes.url import router as url_router

app = FastAPI(title="ScamSaathi API", version="0.1.0")

# Allow CORS for any origin (development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routers
app.include_router(health_router, prefix="/api/v1")
app.include_router(message_router, prefix="/api/v1/analyze")
app.include_router(url_router, prefix="/api/v1/analyze")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
