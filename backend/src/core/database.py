"""
Database connection module
Handles Redis and MongoDB connections
"""

import redis
from pymongo import MongoClient
from typing import Optional

from .config import get_settings


class Database:
    """Database connection manager"""
    
    _redis_client: Optional[redis.Redis] = None
    _mongo_client: Optional[MongoClient] = None
    
    @classmethod
    def get_redis(cls) -> redis.Redis:
        """Get or create Redis connection"""
        if cls._redis_client is None:
            settings = get_settings()
            cls._redis_client = redis.from_url(
                settings.redis_url,
                decode_responses=True
            )
        return cls._redis_client
    
    @classmethod
    def get_mongo(cls) -> MongoClient:
        """Get or create MongoDB connection"""
        if cls._mongo_client is None:
            settings = get_settings()
            cls._mongo_client = MongoClient(settings.mongodb_uri)
        return cls._mongo_client
    
    @classmethod
    def get_mongo_db(cls, db_name: str = "archivio"):
        """Get MongoDB database instance"""
        return cls.get_mongo()[db_name]
    
    @classmethod
    def close_connections(cls):
        """Close all database connections"""
        if cls._redis_client:
            cls._redis_client.close()
            cls._redis_client = None
        if cls._mongo_client:
            cls._mongo_client.close()
            cls._mongo_client = None


# Convenience functions
def get_redis() -> redis.Redis:
    return Database.get_redis()


def get_mongo_db(db_name: str = "archivio"):
    return Database.get_mongo_db(db_name)
