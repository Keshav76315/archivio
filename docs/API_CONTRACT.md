# Archivio API Contract

> API specification for frontend-backend communication

## Base URL

- **Development:** `http://localhost:8000/api`
- **Production:** `https://archivio.netlify.app/.netlify/functions/api`

---

## Authentication

Currently no authentication required. Future: JWT tokens.

---

## Endpoints

### Health Check

```
GET /api/health
```

**Response:**

```json
{
  "status": "ok",
  "version": "0.1.0",
  "timestamp": "2026-02-07T13:30:00Z"
}
```

---

### Exhibits

#### List Exhibits

```
GET /api/exhibits
```

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| `q` | string | Search query |
| `domain` | string | Filter by domain (geocities, myspace) |
| `year_start` | int | Filter from year |
| `year_end` | int | Filter to year |
| `limit` | int | Results per page (default: 20) |
| `offset` | int | Pagination offset |

**Response:**

```json
{
  "exhibits": [
    {
      "id": "abc123",
      "title": "My First HomePage",
      "url": "https://web.archive.org/web/19990125/...",
      "original_url": "http://geocities.com/user/page",
      "domain": "geocities",
      "capture_date": "1999-01-25",
      "thumbnail_url": "/thumbnails/abc123.jpg",
      "context": "Personal homepage from the early web era..."
    }
  ],
  "total": 2847,
  "limit": 20,
  "offset": 0
}
```

#### Get Single Exhibit

```
GET /api/exhibits/{id}
```

**Response:**

```json
{
  "id": "abc123",
  "title": "My First HomePage",
  "url": "https://web.archive.org/web/19990125/...",
  "original_url": "http://geocities.com/user/page",
  "domain": "geocities",
  "capture_date": "1999-01-25",
  "thumbnail_url": "/thumbnails/abc123.jpg",
  "content_html": "<html>...</html>",
  "context": "Personal homepage from the early web era...",
  "related_exhibits": ["def456", "ghi789"],
  "metadata": {
    "archived_at": "2026-01-15T10:30:00Z",
    "source": "wayback",
    "embedding_model": "all-MiniLM-L6-v2"
  }
}
```

---

### Search

#### Semantic Search

```
POST /api/search
```

**Request:**

```json
{
  "query": "early 2000s flash games",
  "limit": 10,
  "filters": {
    "year_start": 2000,
    "year_end": 2005
  }
}
```

**Response:**

```json
{
  "results": [
    {
      "id": "xyz789",
      "title": "Homestar Runner",
      "score": 0.92,
      "domain": "flash",
      "capture_date": "2003-05-12"
    }
  ],
  "query_embedding_time_ms": 45,
  "search_time_ms": 12
}
```

---

### Submissions

#### Submit URL for Archiving

```
POST /api/submissions
```

**Request:**

```json
{
  "url": "https://web.archive.org/web/20000301/...",
  "category": "personal_site",
  "year_estimate": 2000,
  "description": "Early weblog from the 2000s"
}
```

**Response:**

```json
{
  "id": "sub_abc123",
  "status": "pending",
  "message": "Submission received. We'll review it soon."
}
```

---

### Timeline

#### Get Timeline Stats

```
GET /api/timeline
```

**Response:**

```json
{
  "years": [
    { "year": 1996, "count": 45 },
    { "year": 1997, "count": 72 },
    { "year": 1998, "count": 120 }
  ],
  "total_exhibits": 2847
}
```

---

## Error Responses

All errors return:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Exhibit not found"
  }
}
```

**Status Codes:**

- `400` - Bad Request
- `404` - Not Found
- `429` - Rate Limited
- `500` - Server Error

---

## Rate Limits

- **Search:** 30 requests/minute
- **Other:** 100 requests/minute

---

_Last updated: 2026-02-07_
