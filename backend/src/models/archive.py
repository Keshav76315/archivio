"""
Pydantic models for Archive endpoints
"""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, HttpUrl, Field


class ArchiveRequest(BaseModel):
    """Request to archive a URL from Wayback Machine"""
    url: HttpUrl = Field(..., description="URL to archive from Wayback Machine")
    from_date: Optional[str] = Field(None, description="Start date (YYYYMMDD)")
    to_date: Optional[str] = Field(None, description="End date (YYYYMMDD)")


class ArchiveMetadata(BaseModel):
    """Metadata for an archived exhibit"""
    id: str = Field(..., description="Unique exhibit ID")
    original_url: str = Field(..., description="Original URL")
    wayback_url: str = Field(..., description="Wayback Machine URL")
    title: str = Field(..., description="Page title")
    domain: str = Field(..., description="Domain name")
    timestamp: str = Field(..., description="Archive timestamp (YYYYMMDDHHMMSS)")
    archived_at: datetime = Field(default_factory=datetime.utcnow)
    description: Optional[str] = None
    thumbnail_url: Optional[str] = None
    tags: List[str] = Field(default_factory=list)


class ArchiveResponse(BaseModel):
    """Response containing archived exhibit data"""
    success: bool
    exhibit: Optional[ArchiveMetadata] = None
    message: Optional[str] = None


class ExhibitListResponse(BaseModel):
    """Response containing list of exhibits"""
    exhibits: List[ArchiveMetadata]
    total: int
    page: int = 1
    per_page: int = 20
