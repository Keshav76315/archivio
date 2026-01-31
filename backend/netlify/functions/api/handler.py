"""
Mangum adapter for Netlify Functions
Wraps FastAPI app for serverless deployment
"""

import sys
from pathlib import Path

# Add backend src to path for imports
backend_path = Path(__file__).resolve().parent.parent.parent.parent / "src"
sys.path.insert(0, str(backend_path))

from mangum import Mangum
from api.main import app

# Mangum handler for Netlify Functions
handler = Mangum(app, lifespan="off")
