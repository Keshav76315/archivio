"""
Archivio Backend - FastAPI Application
Museum of Lost Internet
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Archivio API",
    description="API for the Museum of Lost Internet - preserving extinct internet culture",
    version="0.1.0"
)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    """API information endpoint"""
    return {
        "name": "Archivio API",
        "version": "0.1.0",
        "description": "Museum of Lost Internet",
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


# Import and include routers as they are created
# from src.api.routes import archive, search, context
# app.include_router(archive.router, prefix="/api/archive", tags=["Archive"])
# app.include_router(search.router, prefix="/api/search", tags=["Search"])
# app.include_router(context.router, prefix="/api/context", tags=["Context"])


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
