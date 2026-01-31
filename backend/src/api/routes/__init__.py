"""Routes module initialization"""

from .archive import router as archive_router
from .search import router as search_router
from .context import router as context_router

__all__ = ["archive_router", "search_router", "context_router"]
