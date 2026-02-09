# FIXME - Known Issues & Technical Debt

> Document problems that need future attention. Include context for why the issue exists.

---

## Backend

### 🔴 High Priority

#### CORS Configuration
- **File:** `backend/src/api/main.py`
- **Issue:** CORS set to `allow_origins=["*"]` which is insecure for production
- **Fix:** Configure specific allowed origins from environment variables

### 🟡 Medium Priority

#### Mangum Handler Path Resolution
- **File:** `backend/netlify/functions/api/handler.py`
- **Issue:** Uses `sys.path.insert()` for imports which is fragile
- **Fix:** Consider using proper Python package structure or Netlify's build process

#### Database Connection Singleton
- **File:** `backend/src/core/database.py`
- **Issue:** Class-level connection storage may cause issues in serverless cold starts
- **Fix:** Evaluate connection pooling or per-request connections for Netlify Functions

### 🟢 Low Priority

#### API Route Placeholder Implementations
- **Files:** `backend/src/api/routes/*.py`
- **Issue:** All routes return placeholder responses
- **Fix:** Implement actual logic in Week 2-4

---

## Frontend

*No issues documented yet*

---

## Infrastructure

### Missing Rate Limiting
- **Issue:** No rate limiting on API endpoints
- **Fix:** Add rate limiting middleware (Week 7 task)

### No Error Logging Service
- **Issue:** No centralized error tracking
- **Fix:** Integrate Sentry or similar (Week 7 task)

---

<!-- Template for new issues:
#### Issue Title
- **File:** `path/to/file`
- **Issue:** Description of the problem
- **Fix:** Proposed solution
-->
