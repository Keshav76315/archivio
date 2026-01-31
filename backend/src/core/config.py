"""
Configuration module for Archivio Backend
Loads environment variables and provides config access
"""

import os
from functools import lru_cache
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # App Info
    app_name: str = "Archivio API"
    version: str = "0.1.0"
    environment: str = "development"
    debug: bool = True
    
    # Redis
    redis_url: str = "redis://localhost:6379"
    
    # MongoDB
    mongodb_uri: str = "mongodb://localhost:27017/archivio"
    
    # HuggingFace
    huggingface_api_key: str = ""
    
    # OpenAI
    openai_api_key: str = ""
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance"""
    return Settings()
