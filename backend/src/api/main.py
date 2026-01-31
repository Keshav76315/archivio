"""
Archivio Backend - FastAPI Application
Museum of Lost Internet
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import archive_router, search_router, context_router

app = FastAPI(
    title="Archivio API",
    description="API for the Museum of Lost Internet - preserving extinct internet culture",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(archive_router, prefix="/api/archive", tags=["Archive"])
app.include_router(search_router, prefix="/api/search", tags=["Search"])
app.include_router(context_router, prefix="/api/context", tags=["Context"])


@app.get("/")
def root():
    """API information endpoint"""
    return {
        "name": "Archivio API",
        "version": "0.1.0",
        "description": "Museum of Lost Internet",
        "docs": "/docs",
        "endpoints": {
            "health": "/health",
            "archive": "/api/archive",
            "search": "/api/search",
            "context": "/api/context",
        }
    }


@app.get("/health")
def health_check():
    """Health check endpoint for monitoring"""
    return {"status": "ok", "service": "archivio-api"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
