"""
Configuration module for Archivio Backend
Loads environment variables and provides config access
"""

import os
from pathlib import Path
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

# Find project root (where .env lives)
PROJECT_ROOT = Path(
    __file__
).parent.parent.parent.parent  # backend/src/core -> backend -> project root


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""

    # App Info
    app_name: str = "Archivio API"
    version: str = "0.1.0"
    environment: str = "development"
    debug: bool = True

    # Redis (separate fields for Redis Cloud compatibility)
    redis_host: str = "localhost"
    redis_port: int = 6379
    redis_password: str = ""

    @property
    def redis_url(self) -> str:
        """Construct Redis URL from components"""
        if self.redis_password:
            return f"redis://:{self.redis_password}@{self.redis_host}:{self.redis_port}"
        return f"redis://{self.redis_host}:{self.redis_port}"

    # MongoDB
    mongodb_uri: str = "mongodb://localhost:27017/archivio"

    # HuggingFace
    huggingface_api_key: str = ""

    # OpenAI
    openai_api_key: str = ""

    model_config = SettingsConfigDict(
        env_file=str(PROJECT_ROOT / ".env"), env_file_encoding="utf-8", extra="ignore"
    )


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance"""
    return Settings()
