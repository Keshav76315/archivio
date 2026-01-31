"""
Pydantic models for Search endpoints
"""

from typing import List, Optional
from pydantic import BaseModel, Field


class SearchQuery(BaseModel):
    """Search query request"""
    query: str = Field(..., description="Search query text", min_length=1)
    limit: int = Field(10, ge=1, le=50, description="Maximum results")
    domain: Optional[str] = Field(None, description="Filter by domain")
    year_from: Optional[int] = Field(None, description="Filter by start year")
    year_to: Optional[int] = Field(None, description="Filter by end year")


class SearchResult(BaseModel):
    """Single search result"""
    id: str
    title: str
    url: str
    domain: str
    timestamp: str
    snippet: Optional[str] = None
    score: float = Field(..., description="Similarity score")


class SearchResponse(BaseModel):
    """Search response with results"""
    query: str
    results: List[SearchResult]
    total: int
    took_ms: float = Field(..., description="Query time in milliseconds")


class EmbeddingRequest(BaseModel):
    """Request to generate embeddings for text"""
    text: str = Field(..., description="Text to embed", min_length=1)


class EmbeddingResponse(BaseModel):
    """Response with embedding vector"""
    text: str
    embedding: List[float]
    model: str = "BAAI/bge-small-en-v1.5"
