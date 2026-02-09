"""
Quick test script to verify Redis connection
Run: python test_redis.py
"""

import os
import sys

# Add parent to path for imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Load .env from project root
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

import redis


def test_redis_connection():
    """Test Redis Cloud connection with credentials from .env"""

    host = os.getenv("REDIS_HOST")
    port = os.getenv("REDIS_PORT")
    password = os.getenv("REDIS_PASSWORD")

    print("=" * 50)
    print("🔴 Redis Connection Test")
    print("=" * 50)
    print(f"Host: {host}")
    print(f"Port: {port}")
    print(f"Password: {'*' * 8}... (hidden)")
    print("-" * 50)

    try:
        # Create Redis connection
        r = redis.Redis(
            host=host,
            port=int(port),
            password=password,
            decode_responses=True,
            socket_timeout=10,
        )

        # Test connection with PING
        print("Testing connection with PING...")
        response = r.ping()
        print(f"✅ PING response: {response}")

        # Test SET/GET
        print("\nTesting SET/GET...")
        r.set("archivio:test", "Hello from Archivio!")
        value = r.get("archivio:test")
        print(f"✅ SET/GET works: '{value}'")

        # Clean up test key
        r.delete("archivio:test")
        print("✅ Cleanup: test key deleted")

        # Get server info
        print("\nServer Info:")
        info = r.info("server")
        print(f"  Redis version: {info.get('redis_version', 'N/A')}")

        memory = r.info("memory")
        used_mb = int(memory.get("used_memory", 0)) / (1024 * 1024)
        print(f"  Memory used: {used_mb:.2f} MB")

        print("\n" + "=" * 50)
        print("🎉 SUCCESS! Redis connection is working!")
        print("=" * 50)

        r.close()
        return True

    except redis.ConnectionError as e:
        print(f"\n❌ Connection Error: {e}")
        return False
    except redis.AuthenticationError as e:
        print(f"\n❌ Authentication Error: {e}")
        print("Check your REDIS_PASSWORD in .env")
        return False
    except Exception as e:
        print(f"\n❌ Error: {type(e).__name__}: {e}")
        return False


if __name__ == "__main__":
    success = test_redis_connection()
    sys.exit(0 if success else 1)
