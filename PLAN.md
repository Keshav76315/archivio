# 🏛️ **Archivio - Comprehensive Project Plan**

## **Project Overview**

**Project Name:** Archivio  
**Team:** Keshav (Backend + AI + Infrastructure) & Anzal (Frontend + 3D/AR + UX)  
**Timeline:** 8 weeks (2 months)  
**Budget:** $0 initial deployment (Free tier stack)  
**Goal:** Create a captivating, educational platform that preserves and showcases extinct internet culture through interactive 3D/AR experiences with AI-generated historical context.

***

## 📋 **Table of Contents**

1. [Tech Stack & Architecture](#tech-stack)
2. [Features & Routes](#features-routes)
3. [Project Structure](#project-structure)
4. [AI vs Developer Responsibilities](#ai-dev-split)
5. [Learning Resources](#learning-resources)
6. [Implementation Phases](#implementation-phases)
7. [Asset Attribution](#asset-attribution)
8. [Deployment Strategy](#deployment)
9. [Collaboration Workflow](#collaboration)

***

## <a name="tech-stack"></a>1. 💻 **Tech Stack & Architecture**

### **Frontend (Anzal's Domain)**
```
React 18 + Vite
├── Three.js (3D visualization)
├── React Three Fiber (React wrapper for Three.js)
├── A-Frame (WebXR/AR mode)
├── TailwindCSS (styling)
├── Zustand (state management - lightweight)
└── React Router (navigation)
```

**Why this stack?**
- React + Vite: Fast dev experience, HMR
- Three.js: Industry standard for web 3D
- React Three Fiber: Makes Three.js reactive and easier to manage
- A-Frame: Simplifies WebXR without complex WebGL code
- Zustand: Simpler than Redux, perfect for moderate state

### **Backend (Keshav's Domain)**
```
FastAPI (Python 3.11+)
├── Mangum (AWS Lambda adapter for Netlify Functions)
├── Redis-py (Redis client)
├── HuggingFace Transformers (local embedding models)
├── BeautifulSoup4 + Requests (web scraping)
├── Pydantic (data validation)
└── Python-dotenv (environment variables)
```

**Why this stack?**
- FastAPI: You already know it from collab project
- Mangum: Converts FastAPI to serverless functions [dev-kibana.briz](https://dev-kibana.briz.ua/blog/deploy-python-fastapi-apps-on-netlify-1764802207)
- Redis-py: Official Redis client
- HuggingFace: Free embedding API (200K tokens/month)

### **Database & Storage**
```
Redis Cloud (Free 30MB tier)
├── Vector Search (embeddings)
├── JSON storage (metadata)
└── Caching layer (API responses)

MongoDB Atlas (Free 512MB tier)
└── Archived content backup (overflow from Redis)
```

### **AI Services**
```
HuggingFace Inference API (FREE)
├── BAAI/bge-small-en-v1.5 (embeddings)
└── 200K tokens/month limit

OpenAI API (Pay-as-go)
├── GPT-4 Mini ($0.15/1M tokens - for context generation)
└── DALL-E 3 (optional - $0.04/image)
```

### **Deployment**
```
Netlify (FREE)
├── Frontend (React + Vite)
├── Backend (FastAPI via Netlify Functions)
├── Automatic HTTPS
└── CI/CD from GitHub
```

**Architecture Diagram:**

```
┌─────────────────────────────────────────────────────┐
│                    USER DEVICE                      │
│              (Browser with WebXR support)           │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│              NETLIFY (FREE HOSTING)                 │
│                                                     │
│  ┌──────────────────┐   ┌──────────────────────┐  │
│  │   React Frontend │   │  FastAPI Backend     │  │
│  │   (Static Site)  │◄──┤ (Netlify Functions)  │  │
│  │  - Three.js 3D   │   │  - API endpoints     │  │
│  │  - A-Frame AR    │   │  - Mangum adapter    │  │
│  └──────────────────┘   └──────────┬───────────┘  │
│                                    │               │
└────────────────────────────────────┼───────────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
                    ▼                ▼                ▼
        ┌───────────────┐  ┌──────────────┐  ┌──────────────┐
        │ Redis Cloud   │  │ HuggingFace  │  │ OpenAI API   │
        │ (Vector DB)   │  │ Inference    │  │ (GPT-4 Mini) │
        │ - FREE 30MB   │  │ - FREE 200K  │  │ - Pay-as-go  │
        │ - Embeddings  │  │ - Embeddings │  │ - Context    │
        └───────────────┘  └──────────────┘  └──────────────┘
                    │
                    ▼
        ┌───────────────────┐
        │ MongoDB Atlas     │
        │ (Backup Storage)  │
        │ - FREE 512MB      │
        │ - Raw HTML/assets │
        └───────────────────┘
```

***

## <a name="features-routes"></a>2. 🎯 **Features & Routes**

### **Core Features (MVP - Week 1-6)**

| Feature | Description | Priority |
|---------|-------------|----------|
| **Exhibit Browse** | Grid/timeline view of archived content | P0 (Must have) |
| **3D Museum** | Navigate virtual space with exhibits | P0 |
| **Semantic Search** | Find content by meaning, not keywords | P0 |
| **AI Context** | Historical explanations for exhibits | P1 (Should have) |
| **Submit Content** | Users suggest URLs to archive | P1 |
| **AR Time Capsule** | View exhibits in physical space (AR) | P2 (Nice to have) |

### **Enhanced Features (Post-MVP - Week 7-8)**

| Feature | Description | Priority |
|---------|-------------|----------|
| **Collections** | Curated themed exhibits | P2 |
| **Time Machine** | Scrub through internet eras | P2 |
| **Social Sharing** | Share favorite exhibits | P2 |
| **Visual Recreation** | DALL-E generates lost images | P3 (Optional) |

### **API Routes (FastAPI Backend)**

```python
# backend/main.py structure

# Health & Info
GET  /                          # API info
GET  /health                    # Health check

# Archive Management
POST   /api/archive/scrape      # Scrape new URL from Wayback
GET    /api/archive/list        # List all archived content
GET    /api/archive/{id}        # Get specific exhibit
DELETE /api/archive/{id}        # Delete exhibit (admin)

# Search & Discovery
GET  /api/search                # Semantic search
POST /api/search/embed          # Generate embedding for query
GET  /api/browse/timeline       # Browse by year
GET  /api/browse/domain         # Browse by domain (myspace.com, geocities, etc)

# AI Features
POST /api/context/generate      # Generate historical context
GET  /api/context/{id}          # Get cached context
POST /api/recreate/image        # DALL-E image recreation (optional)

# User Submissions
POST /api/submit                # Submit URL suggestion
GET  /api/submit/pending        # List pending submissions (admin)
PUT  /api/submit/{id}/approve   # Approve submission (admin)

# Analytics
GET  /api/stats                 # Usage statistics
```

### **Frontend Routes (React Router)**

```javascript
// src/App.jsx routes

/                              # Landing page
/explore                       # Main museum (3D view)
/exhibit/:id                   # Individual exhibit detail
/timeline                      # Timeline view
/search                        # Search interface
/submit                        # Submit URL form
/ar                           # AR mode (WebXR)
/about                        # About the project
/privacy                      # Privacy policy
```

***

## <a name="project-structure"></a>3. 📁 **Project Structure**

```
museum-of-lost-internet/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD automation
│
├── frontend/                       # Anzal's workspace
│   ├── public/
│   │   ├── models/                # 3D models (GLTF/GLB)
│   │   ├── textures/              # Texture assets
│   │   └── sounds/                # Audio files
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3D/
│   │   │   │   ├── Museum.jsx     # Main 3D scene
│   │   │   │   ├── Exhibit.jsx    # Single exhibit display
│   │   │   │   └── Camera.jsx     # Camera controller
│   │   │   │
│   │   │   ├── AR/
│   │   │   │   ├── ARScene.jsx    # A-Frame AR wrapper
│   │   │   │   └── ARMarker.jsx   # AR markers
│   │   │   │
│   │   │   ├── UI/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── ExhibitCard.jsx
│   │   │   │   └── Timeline.jsx
│   │   │   │
│   │   │   └── Layout/
│   │   │       ├── Layout.jsx
│   │   │       └── Navigation.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Explore.jsx
│   │   │   ├── ExhibitDetail.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Submit.jsx
│   │   │   └── ARView.jsx
│   │   │
│   │   ├── stores/
│   │   │   ├── exhibitStore.js    # Zustand store
│   │   │   └── searchStore.js
│   │   │
│   │   ├── utils/
│   │   │   ├── api.js             # API client
│   │   │   └── three-helpers.js   # Three.js utilities
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                        # Keshav's workspace
│   ├── netlify/
│   │   └── functions/
│   │       └── api/
│   │           ├── handler.py      # Mangum adapter
│   │           └── requirements.txt
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   ├── archive.py     # Archive endpoints
│   │   │   │   ├── search.py      # Search endpoints
│   │   │   │   ├── context.py     # AI context endpoints
│   │   │   │   └── submit.py      # Submission endpoints
│   │   │   │
│   │   │   └── main.py            # FastAPI app
│   │   │
│   │   ├── core/
│   │   │   ├── config.py          # Configuration
│   │   │   ├── database.py        # DB connections
│   │   │   └── security.py        # Auth (future)
│   │   │
│   │   ├── services/
│   │   │   ├── scraper.py         # Wayback scraper
│   │   │   ├── embeddings.py      # HuggingFace embeddings
│   │   │   ├── redis_service.py   # Redis operations
│   │   │   ├── openai_service.py  # GPT-4 context
│   │   │   └── mongo_service.py   # MongoDB backup
│   │   │
│   │   ├── models/
│   │   │   ├── archive.py         # Pydantic models
│   │   │   └── search.py
│   │   │
│   │   └── utils/
│   │       ├── logger.py
│   │       └── validators.py
│   │
│   ├── tests/
│   │   ├── test_scraper.py
│   │   └── test_embeddings.py
│   │
│   ├── requirements.txt
│   └── .env.example
│
├── docs/                          # Documentation
│   ├── API.md                    # API documentation
│   ├── CONTRIBUTING.md
│   └── ARCHITECTURE.md
│
├── scripts/                       # Utility scripts
│   ├── seed_data.py              # Initial data seeding
│   └── test_wayback.py           # Test Wayback API
│
├── netlify.toml                  # Netlify config
├── README.md
├── .gitignore
└── LICENSE
```

***

## <a name="ai-dev-split"></a>4. 🤖 **AI vs Developer Responsibilities**

### **Philosophy: AI as Co-pilot, Not Pilot**

**Golden Rule:** AI generates boilerplate, scaffolding, and utilities. Developers own core logic, architecture decisions, and user experience.

### **What AI Should Do (Antigravity + CodeRabbit)**

| Task | AI Tool | Why |
|------|---------|-----|
| **Boilerplate code** | Antigravity | FastAPI routes, Pydantic models, React components structure |
| **Utility functions** | Antigravity | Date formatting, string manipulation, validation helpers |
| **Type definitions** | GitHub Copilot | TypeScript interfaces, Pydantic schemas |
| **Test skeletons** | Antigravity | Test structure (you fill in assertions) |
| **Documentation strings** | Antigravity | Docstrings, JSDoc comments |
| **CSS utility classes** | Antigravity | TailwindCSS class combinations |
| **Code reviews** | CodeRabbit | Catch bugs, suggest optimizations, enforce patterns |
| **Regex patterns** | ChatGPT/Claude | Complex regex for URL parsing, validation |

### **What DEVELOPERS Must Do (Keshav & Anzal)**

| Responsibility | Owner | Why |
|----------------|-------|-----|
| **Architecture decisions** | Both | AI can't make strategic trade-offs |
| **3D scene design** | Anzal | Requires artistic vision and UX intuition |
| **Wayback scraping logic** | Keshav | Complex business logic with edge cases |
| **Redis vector schema** | Keshav | Performance-critical, requires deep understanding |
| **User interaction flows** | Anzal | UX requires empathy and user testing |
| **Error handling strategy** | Both | AI generates basic try/catch, but recovery logic is yours |
| **Performance optimization** | Both | Profiling, bottleneck analysis requires human judgment |
| **Prompt engineering** | Keshav | Crafting GPT-4 prompts for quality context |
| **WebXR implementation** | Anzal | A-Frame setup requires understanding VR/AR paradigms |
| **Security & validation** | Keshav | Input sanitization, rate limiting, auth |

### **Specific Examples**

#### **Example 1: Scraping Wayback Machine**

**AI generates (Antigravity):**
```python
# Basic structure
import requests
from typing import List, Dict

def get_wayback_urls(url: str, from_date: str, to_date: str) -> List[Dict]:
    """Fetch archived URLs from Wayback Machine"""
    wayback_api = "http://web.archive.org/cdx/search/cdx"
    params = {
        "url": url,
        "from": from_date,
        "to": to_date,
        "output": "json"
    }
    # TODO: Implement request logic
    pass
```

**YOU complete (Keshav):**
```python
def get_wayback_urls(url: str, from_date: str, to_date: str) -> List[Dict]:
    """Fetch archived URLs from Wayback Machine with error handling and filtering"""
    wayback_api = "http://web.archive.org/cdx/search/cdx"
    
    # YOUR LOGIC: Advanced filtering, pagination, rate limiting
    params = {
        "url": url,
        "from": from_date,
        "to": to_date,
        "output": "json",
        "fl": "timestamp,original,statuscode,mimetype",
        "filter": ["statuscode:200", "mimetype:text/html"],
        "collapse": "timestamp:8"  # One capture per day
    }
    
    try:
        response = requests.get(wayback_api, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        # YOUR LOGIC: Parse, validate, deduplicate
        results = []
        for item in data[1:]:  # Skip header
            timestamp, original, statuscode, mimetype = item
            results.append({
                "timestamp": timestamp,
                "url": original,
                "wayback_url": f"http://web.archive.org/web/{timestamp}/{original}",
                "status": statuscode,
                "type": mimetype
            })
        
        return results
        
    except requests.RequestException as e:
        # YOUR LOGIC: Sophisticated error handling
        logger.error(f"Wayback API error: {e}")
        raise WaybackError(f"Failed to fetch archives for {url}")
```

#### **Example 2: 3D Museum Scene**

**AI generates (Antigravity):**
```jsx
// Basic Three.js scene structure
import { Canvas } from '@react-three-fiber'
import { OrbitControls } from '@react-three-drei'

function Museum() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      {/* TODO: Add exhibits */}
    </Canvas>
  )
}
```

**YOU complete (Anzal):**
```jsx
import { Canvas, useFrame } from '@react-three-fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three-drei'
import { useState, useRef } from 'react'
import ExhibitFrame from './ExhibitFrame'
import { useExhibitStore } from '../../stores/exhibitStore'

function Museum() {
  const exhibits = useExhibitStore(state => state.exhibits)
  const cameraRef = useRef()
  
  // YOUR LOGIC: Camera movement on exhibit selection
  useFrame((state) => {
    if (selectedExhibit) {
      cameraRef.current.position.lerp(selectedExhibit.cameraPosition, 0.05)
    }
  })
  
  return (
    <Canvas shadows>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 5]} />
      
      {/* YOUR CREATIVE VISION: Lighting design */}
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <Environment preset="warehouse" />
      
      {/* YOUR SPATIAL DESIGN: Exhibit placement algorithm */}
      {exhibits.map((exhibit, i) => {
        const angle = (i / exhibits.length) * Math.PI * 2
        const radius = 8
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        
        return (
          <ExhibitFrame
            key={exhibit.id}
            position={[x, 0, z]}
            rotation={[0, angle + Math.PI / 2, 0]}
            exhibit={exhibit}
          />
        )
      })}
      
      <OrbitControls 
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={20}
      />
    </Canvas>
  )
}
```

### **AI Workflow Integration**

**1. Feature Planning (Humans)**
- Keshav & Anzal discuss feature
- Define acceptance criteria
- Sketch rough architecture

**2. Scaffolding (AI)**
- Prompt Antigravity: "Generate FastAPI route for semantic search with Redis vector search"
- AI creates file structure, function signatures, basic logic

**3. Implementation (Humans)**
- Fill in business logic
- Add edge case handling
- Optimize performance

**4. Testing (Both)**
- AI generates test structure
- Humans write assertions and test data

**5. Review (AI + Humans)**
- CodeRabbit auto-reviews PR
- Humans review CodeRabbit suggestions
- Final human approval

***

## <a name="learning-resources"></a>5. 📚 **Learning Resources**

### **For Keshav (Backend + AI)**

#### **Netlify Functions + FastAPI**
- [ ] **Official Docs**: [Netlify Functions - Python](https://docs.netlify.com/functions/overview/)
- [ ] **Tutorial**: "Deploy Python FastAPI on Netlify" [billiardblitz](https://billiardblitz.com/blog/deploy-python-fastapi-apps-on-netlify-1764802207)
  - Focus on Mangum adapter
  - Learn serverless function patterns
  - Estimated time: 2 hours

#### **Redis Vector Search**
- [ ] **Official Guide**: [Redis as Vector Database](https://redis.io/docs/latest/develop/get-started/vector-database/) [redis](https://redis.io/docs/latest/develop/get-started/vector-database/)
- [ ] **Tutorial**: [Redis + OpenAI Embeddings](https://developers.openai.com/cookbook/examples/vector_databases/redis/getting-started-with-redis-and-openai/) [developers.openai](https://developers.openai.com/cookbook/examples/vector_databases/redis/getting-started-with-redis-and-openai/)
  - Vector indexing
  - Similarity search queries
  - Estimated time: 3 hours

#### **Web Scraping Wayback Machine**
- [ ] **Tutorial**: "Scraping Historical Data from Wayback Machine" [reddit](https://www.reddit.com/r/webscraping/comments/151x9hb/scraping_data_from_past_a_stepbystep_tutorial/)
- [ ] **GitHub Example**: [wayback scraping project](https://github.com/johncmerfeld/wayback) [github](https://github.com/johncmerfeld/wayback)
  - CDX API usage
  - Parsing archived pages
  - Estimated time: 2 hours

#### **HuggingFace Embeddings**
- [ ] **Official Docs**: [Inference API - Feature Extraction](https://huggingface.co/docs/api-inference/detailed_parameters#feature-extraction-task)
- [ ] **Tutorial**: [Local Embeddings with HuggingFace](https://developers.llamaindex.ai/python/examples/embeddings/ipex_llm/) [developers.llamaindex](https://developers.llamaindex.ai/python/examples/embeddings/ipex_llm/)
  - API usage
  - Model selection
  - Estimated time: 1.5 hours

**Total learning time: ~9 hours** (spread across Week 1-2)

***

### **For Anzal (Frontend + 3D/AR)**

#### **Three.js Fundamentals**
- [ ] **Official Tutorial**: [Three.js Journey - First Steps](https://threejs.org/manual/#en/fundamentals)
- [ ] **Video Course**: [Three.js Learning Path 2025](https://threejsresources.com/blog/three-js-learning-path-from-zero-to-mastery) [threejsresources](https://threejsresources.com/blog/three-js-learning-path-from-zero-to-mastery)
  - Scenes, cameras, lights
  - Materials and geometries
  - Loading 3D models
  - Estimated time: 6 hours

#### **React Three Fiber**
- [ ] **Official Docs**: [React Three Fiber - Getting Started](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [ ] **Tutorial**: [Build Your First R3F Scene](https://www.youtube.com/watch?v=DPl34H2ISsk)
  - Converting Three.js to R3F
  - React patterns for 3D
  - Estimated time: 3 hours

#### **WebXR with A-Frame**
- [ ] **Official Tutorial**: [A-Frame School](https://aframe.io/aframe-school/)
- [ ] **Video Course**: "Learn WebXR using ThreeJS" [youtube](https://www.youtube.com/watch?v=zhnYcReLdK4)
- [ ] **Article**: "How to Develop WebXR App in Three.js" [threejsdevelopers](https://www.threejsdevelopers.com/blogs/how-to-develop-a-webxr-app-in-threejs/)
  - WebXR API basics
  - AR mode implementation
  - Controller interactions
  - Estimated time: 5 hours

#### **Performance Optimization**
- [ ] **Article**: [Three.js Performance Tips](https://discoverthreejs.com/tips-and-tricks/)
  - Geometry optimization
  - Texture compression
  - LOD (Level of Detail)
  - Estimated time: 2 hours

**Total learning time: ~16 hours** (spread across Week 1-3)

***

### **Shared Resources (Both)**

#### **Git Collaboration**
- [ ] **Tutorial**: [Git Workflow for Teams](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [ ] **Practice**: [Learn Git Branching](https://learngitbranching.js.org/)
  - Feature branch workflow
  - Pull request best practices
  - Estimated time: 2 hours each

#### **Project Management**
- [ ] **Tool**: GitHub Projects (Kanban board)
- [ ] **Guide**: [GitHub Projects for Agile](https://github.com/features/issues)
  - Sprint planning
  - Issue tracking
  - Estimated time: 1 hour setup

***

## <a name="implementation-phases"></a>6. 🚀 **Implementation Phases (8 Weeks)**

### **Week 1: Foundation & Learning**

**Keshav's Tasks:**
- [ ] Set up project repository structure
- [ ] Configure Netlify + FastAPI with Mangum
- [ ] Set up Redis Cloud free tier
- [ ] Complete Redis vector search tutorial
- [ ] Write basic FastAPI health endpoint
- [ ] Test Netlify Functions deployment

**Anzal's Tasks:**
- [ ] Set up React + Vite project
- [ ] Configure TailwindCSS
- [ ] Complete Three.js fundamentals tutorial
- [ ] Create basic Three.js scene (spinning cube test)
- [ ] Set up React Router
- [ ] Design initial UI mockups (Figma/Excalidraw)

**Shared:**
- [ ] Define API contract (routes, request/response schemas)
- [ ] Set up GitHub Projects board
- [ ] Create `.env.example` files

**Deliverable:** Working "Hello World" - Frontend calls backend `/health` endpoint

***

### **Week 2: Core Backend Infrastructure**

**Keshav's Tasks:**
- [ ] Implement Wayback Machine scraper
  - Test on 5-10 URLs (MySpace, GeoCities pages)
  - Handle errors (missing pages, timeouts)
- [ ] Set up HuggingFace Inference API
  - Test embedding generation
  - Measure latency
- [ ] Implement Redis vector storage
  - Create index schema
  - Write insert/search functions
- [ ] Create archive API routes
  - `POST /api/archive/scrape`
  - `GET /api/archive/list`
  - `GET /api/archive/{id}`

**Anzal's Tasks:**
- [ ] Build UI components
  - Header/Navigation
  - ExhibitCard component
  - SearchBar component
- [ ] Create homepage layout
- [ ] Set up Zustand store for exhibits
- [ ] Implement API client (`utils/api.js`)

**Shared:**
- [ ] Integration test: Scrape URL → Display in frontend

**Deliverable:** Can scrape a URL from Wayback and see it listed in frontend

***

### **Week 3: Search & 3D Museum**

**Keshav's Tasks:**
- [ ] Implement semantic search
  - `POST /api/search/embed` (generate query embedding)
  - `GET /api/search?q=...` (vector similarity search)
- [ ] Seed database with 100+ archived pages
  - Mix of domains (MySpace, Flash games, old forums)
- [ ] Add filtering by year/domain
- [ ] Basic caching for repeated searches

**Anzal's Tasks:**
- [ ] Build 3D museum scene
  - Camera controls (orbit)
  - Basic museum environment (floor, walls, lighting)
- [ ] Create Exhibit frames (3D objects to display content)
- [ ] Implement exhibit click → detail view
- [ ] Add loading states and transitions

**Shared:**
- [ ] Test: Search query → Display results in 3D space

**Deliverable:** Working 3D museum with searchable exhibits

***

### **Week 4: AI Context Generation**

**Keshav's Tasks:**
- [ ] Integrate OpenAI GPT-4 Mini API
- [ ] Implement context generation endpoint
  - `POST /api/context/generate`
  - Prompt engineering for quality output
- [ ] Add Redis caching for generated context
- [ ] Handle API errors and fallbacks
- [ ] Track API costs (logging)

**Anzal's Tasks:**
- [ ] Create ExhibitDetail page
  - Display archived content (iframe or screenshot)
  - Show AI-generated historical context
  - Add "Related Exhibits" section
- [ ] Improve 3D scene performance
  - Frustum culling
  - Lazy loading distant exhibits
- [ ] Add timeline visualization (D3.js or custom)

**Shared:**
- [ ] Test: Click exhibit → View content + AI context

**Deliverable:** Full exhibit detail view with AI explanations

***

### **Week 5: User Submissions & Data Growth**

**Keshav's Tasks:**
- [ ] Implement submission system
  - `POST /api/submit` (validate URL)
  - `GET /api/submit/pending` (admin only)
  - `PUT /api/submit/{id}/approve`
- [ ] Add MongoDB Atlas integration (backup storage)
- [ ] Create admin routes (basic auth)
- [ ] Batch scraping script for approved submissions
- [ ] Increase dataset to 500+ exhibits

**Anzal's Tasks:**
- [ ] Build Submit page
  - Form validation
  - URL preview
  - Success/error states
- [ ] Add browse modes:
  - Timeline view (horizontal scroll)
  - Grid view (cards)
  - 3D museum view (existing)
- [ ] Implement view switching

**Shared:**
- [ ] Test: Submit URL → Admin approves → Appears in museum

**Deliverable:** User can submit URLs for archiving

***

### **Week 6: AR Mode (WebXR)**

**Keshav's Tasks:**
- [ ] Optimize API responses for mobile
  - Reduce payload sizes
  - Add image compression
- [ ] Create lightweight endpoint for AR mode
  - `GET /api/exhibits/nearby` (spatial queries)
- [ ] Performance monitoring

**Anzal's Tasks:**
- [ ] Set up A-Frame for AR
- [ ] Implement AR scene
  - Marker-based OR markerless (choose one)
  - Place exhibits in physical space
- [ ] Add AR UI controls
  - Toggle AR mode
  - Exhibit selection in AR
- [ ] Handle AR device permissions
- [ ] Fallback for non-AR devices

**Shared:**
- [ ] Test on real devices (phone, AR headset if available)

**Deliverable:** Working AR mode on mobile browsers

***

### **Week 7: Polish & Optimization**

**Keshav's Tasks:**
- [ ] Add rate limiting (prevent abuse)
- [ ] Implement error logging (Sentry or similar)
- [ ] Write API documentation (Swagger/OpenAPI)
- [ ] Database optimization
  - Index tuning
  - Query profiling
- [ ] Security audit
  - Input validation
  - CORS configuration

**Anzal's Tasks:**
- [ ] UI/UX polish
  - Animations and transitions
  - Responsive design (mobile, tablet, desktop)
  - Accessibility (ARIA labels, keyboard nav)
- [ ] Add sound effects (optional)
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] 404 page

**Shared:**
- [ ] User testing with 5-10 people
- [ ] Fix reported bugs
- [ ] Performance testing (Lighthouse scores)

**Deliverable:** Production-ready application

***

### **Week 8: Deployment & Documentation**

**Keshav's Tasks:**
- [ ] Set up production environment variables
- [ ] Configure Netlify deployment
  - Build command
  - Environment secrets
- [ ] Set up monitoring dashboards
- [ ] Create backup strategy
- [ ] Write deployment documentation

**Anzal's Tasks:**
- [ ] Final build optimization
  - Code splitting
  - Asset optimization (images, models)
  - Bundle size analysis
- [ ] Create demo video (2-3 min)
- [ ] Write user guide
- [ ] SEO optimization (meta tags, sitemap)

**Shared:**
- [ ] Deploy to production
- [ ] Test production deployment
- [ ] Create README with:
  - Project description
  - Screenshots/GIFs
  - Setup instructions
  - Architecture diagram
  - Contributing guide
- [ ] Prepare portfolio presentation
  - Metrics (pages archived, search latency, etc.)
  - Technical challenges solved
  - Demo script for recruiters

**Deliverable:** Live production app + comprehensive documentation

***

## <a name="asset-attribution"></a>7. 📜 **Asset Attribution & Legal**

### **Content Sources**

All archived content from **Internet Archive Wayback Machine**:
- [ ] Add attribution footer: "Archived content provided by Internet Archive"
- [ ] Link to original Wayback URL for each exhibit
- [ ] Respect robots.txt of original sites
- [ ] Terms: [Internet Archive Terms of Use](https://archive.org/about/terms.php)

### **3D Models & Textures**

**Free Sources:**
- **Sketchfab** (CC-BY or CC0 license)
  - Museum frames, pedestals, environments
  - [ ] Attribute in `CREDITS.md`
- **Poly Haven** (CC0)
  - HDR environments for lighting
- **Kenney.nl** (CC0)
  - Simple geometric shapes

**Format:** 
```markdown
# CREDITS.md

## 3D Models
- Museum Frame: [Model Name](link) by [Artist] (CC-BY 4.0)
- Environment: [HDRI Name](link) from Poly Haven (CC0)

## Textures
- Concrete: Poly Haven (CC0)

## Fonts
- Inter: Google Fonts (OFL)
```

### **Code & Libraries**

All open-source libraries have permissive licenses:
- React (MIT)
- Three.js (MIT)
- FastAPI (MIT)
- A-Frame (MIT)

[ ] Include `LICENSE` file (recommend MIT or Apache 2.0)

***

## <a name="deployment"></a>8. 🚀 **Deployment Strategy**

### **Netlify Configuration**

Create `netlify.toml` in root:

```toml
[build]
  command = "cd frontend && npm run build"
  publish = "frontend/dist"
  functions = "backend/netlify/functions"

[build.environment]
  NODE_VERSION = "18"
  PYTHON_VERSION = "3.11"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "backend/netlify/functions"
  node_bundler = "esbuild"
```

### **Environment Variables (Netlify Dashboard)**

```bash
# Backend
REDIS_URL=redis://default:password@...
REDIS_PASSWORD=...
HF_API_KEY=hf_...
OPENAI_API_KEY=sk-...
MONGODB_URI=mongodb+srv://...

# Frontend (prefixed with VITE_)
VITE_API_BASE_URL=/.netlify/functions/api
```

### **Backend Handler (Mangum Adapter)**

Create `backend/netlify/functions/api/handler.py`:

```python
from mangum import Mangum
from src.api.main import app

handler = Mangum(app, lifespan="off")
```

### **Deployment Steps**

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

2. **Connect to Netlify**
- Go to [netlify.com](https://netlify.com)
- "Add new site" → "Import existing project"
- Connect GitHub repo
- Netlify auto-detects `netlify.toml`

3. **Set Environment Variables**
- Site settings → Environment variables
- Add all variables from above

4. **Deploy**
- Netlify auto-deploys on every push to `main`
- First deploy takes ~5-10 minutes

5. **Get Production URL**
- Netlify assigns: `https://museum-of-lost-internet.netlify.app`
- Optional: Add custom domain later

***

## <a name="collaboration"></a>9. 🤝 **Collaboration Workflow**

### **Git Branching Strategy**

```
main (production)
  ├── develop (integration)
  │   ├── feature/keshav-wayback-scraper
  │   ├── feature/anzal-3d-museum
  │   ├── fix/keshav-redis-connection
  │   └── enhance/anzal-ar-mode
```

### **Branch Naming Convention**

```
feature/[name]-[description]   # New features
fix/[name]-[bug-description]   # Bug fixes
enhance/[name]-[improvement]   # Improvements
docs/[name]-[doc-change]       # Documentation
```

### **Pull Request Process**

1. **Create feature branch**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/keshav-search-api
```

2. **Make changes & commit**
```bash
git add .
git commit -m "feat: implement semantic search endpoint"
```

3. **Push & create PR**
```bash
git push origin feature/keshav-search-api
# Go to GitHub → Create Pull Request
```

4. **PR Template** (create `.github/pull_request_template.md`):
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation

## Testing
- [ ] Tested locally
- [ ] Added tests (if applicable)

## Screenshots (if UI changes)
[Add screenshots]

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed
- [ ] Comments added for complex logic
- [ ] Updated documentation
```

5. **Review Process**
- CodeRabbit auto-reviews (catches issues)
- Partner reviews code
- Discuss & request changes if needed
- Approve & merge to `develop`

6. **Merge to main** (end of week)
```bash
git checkout main
git merge develop
git push origin main
# Netlify auto-deploys
```

### **Communication Channels**

**Daily sync (15 min):**
- What did yesterday
- What doing today
- Any blockers

**Tool: Discord/Slack channel**
- Quick questions
- Share progress (screenshots, videos)
- Code snippets

**Weekly planning (30 min):**
- Review last week's progress
- Plan next week's tasks
- Update GitHub Projects board

### **Task Management (GitHub Projects)**

**Board columns:**
1. **Backlog** - Future tasks
2. **Todo** - This week
3. **In Progress** - Currently working
4. **Review** - PR submitted
5. **Done** - Merged

**Issue Template:**
```markdown
**Title:** Implement semantic search API

**Description:**
Create FastAPI endpoint that accepts query string, generates embedding, 
searches Redis, returns ranked results.

**Acceptance Criteria:**
- [ ] Endpoint responds to GET /api/search
- [ ] Returns JSON with exhibits
- [ ] Sub-100ms latency for cached queries
- [ ] Error handling for invalid queries

**Assigned to:** @Keshav76315
**Estimate:** 4 hours
**Priority:** High
**Depends on:** #12 (Redis setup)
```

***

## 📊 **Success Metrics**

Track these to showcase impact:

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **Archived Exhibits** | 500+ by Week 8 | Database count |
| **Search Latency** | <100ms (cached) | Backend logging |
| **Page Load Time** | <3s | Lighthouse |
| **3D Scene FPS** | >60 FPS | Three.js stats |
| **AI Context Quality** | 4.5/5 user rating | User survey |
| **Mobile AR Success Rate** | >80% devices | Device testing |
| **API Uptime** | >99% | Netlify analytics |
| **Cost** | <$10/month | Billing dashboards |

***

## 🎯 **Portfolio Talking Points**

**Technical depth:**
- "Deployed hybrid AI architecture—local embeddings for cost, API for quality"
- "Achieved sub-50ms vector search across 500+ exhibits using Redis"
- "Built WebXR experience accessible in any browser—no app install"
- "Reduced AI costs 70% through semantic caching with Redis"

**Problem-solving:**
- "Wayback Machine rate limits forced us to implement exponential backoff"
- "Mobile AR had performance issues—optimized to 60 FPS with LOD system"
- "Netlify Functions cold starts were 3s—warmed with scheduled pings"

**Collaboration:**
- "Pair programmed with teammate on complex 3D interactions"
- "Established PR review process catching 15+ bugs before production"
- "Used CodeRabbit for automated code quality—improved consistency 40%"

**Impact:**
- "Preserved 500+ extinct web pages for educational access"
- "Showcased lesser-known internet history (Flash games, MySpace)"
- "Zero cost deployment—entire stack runs on free tiers"

***

## ✅ **Pre-Launch Checklist**

**Week 8 - Final checks:**

**Technical:**
- [ ] All API endpoints return proper status codes
- [ ] CORS configured correctly
- [ ] Rate limiting active
- [ ] Error logging operational
- [ ] Analytics integrated (optional: Google Analytics)
- [ ] Lighthouse score >90 (performance)
- [ ] Mobile responsive (test on 3+ devices)
- [ ] AR mode tested on real devices
- [ ] Load testing (handle 100 concurrent users)

**Content:**
- [ ] Homepage with clear value proposition
- [ ] About page explaining project
- [ ] Privacy policy (if collecting data)
- [ ] Contact/feedback form or email
- [ ] Social meta tags (Open Graph, Twitter Card)
- [ ] Favicon and app icons

**Legal:**
- [ ] CREDITS.md with all attributions
- [ ] LICENSE file
- [ ] Terms of Use (if user submissions)
- [ ] Respect Archive.org terms

**Documentation:**
- [ ] README with setup instructions
- [ ] API documentation (Swagger UI)
- [ ] Architecture diagram
- [ ] Demo video (YouTube/Loom)
- [ ] Blog post or Twitter thread

**Backup:**
- [ ] Database export script
- [ ] Environment variables documented
- [ ] Deployment runbook

***

## 🚨 **Risk Mitigation**

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **Wayback API rate limits** | High | High | Exponential backoff, queue system |
| **HuggingFace free tier exceeded** | Medium | Medium | Monitor usage, upgrade if needed ($9/mo) |
| **Netlify function timeout (10s)** | Medium | High | Break long operations into chunks |
| **Redis free tier full (30MB)** | Medium | Low | Implement LRU eviction, archive old data |
| **3D performance on low-end devices** | High | Medium | Add LOD, simplify models, fallback 2D mode |
| **AR not supported on device** | High | Low | Graceful fallback, clear messaging |
| **API cost overrun (OpenAI)** | Low | High | Set budget alerts, aggressive caching |
| **Time overrun** | Medium | Medium | Cut AR mode if needed (move to post-launch) |

***

## 📞 **Need Help? Resources**

**When stuck:**
1. Check official docs first
2. Search GitHub issues
3. Ask in project Discord/Slack
4. Post on Stack Overflow
5. Reddit communities:
   - r/FastAPI
   - r/threejs
   - r/WebXR
   - r/reactjs

**Emergency contacts:**
- Keshav: [Your contact]
- Anzal: [Anzal's contact]

***

## 🎉 **Launch Plan**

**Soft launch (Week 8):**
- Share with friends/classmates (10-20 users)
- Collect feedback
- Fix critical bugs

**Public launch (Week 9):**
- Post on:
  - Reddit (r/InternetIsBeautiful, r/WebDev, r/nostalgia)
  - Hacker News (Show HN)
  - Twitter/X with demo video
  - LinkedIn (professional network)
  - Dev.to blog post
- Submit to:
  - Product Hunt
  - Indie Hackers
- Email to tech bloggers (optional)

**Post-launch:**
- Monitor analytics
- Respond to feedback
- Iterate on features
- Add to portfolio
- Practice demo for interviews

***

## 📈 **Future Enhancements (Post-Launch)**

**Phase 2 ideas:**
1. **Social features** - Users create collections, upvote exhibits
2. **AI recreation** - DALL-E generates missing images from descriptions
3. **Collaborative archiving** - Crowdsource URL submissions
4. **API for researchers** - Public API for academic use
5. **Mobile app** - React Native version
6. **VR mode** - Full VR headset support (Oculus, PSVR)
7. **Time Machine slider** - Scrub through different archive dates
8. **Meme museum** - Dedicated section for viral content
9. **Education mode** - Lesson plans for digital literacy teachers
10. **Monetization** - Sponsorships, Patreon, API paid tier

***

## 💰 **Actual Cost Projection**

**Month 1-2 (Development):**
- Netlify: FREE
- Redis Cloud: FREE (30MB)
- HuggingFace: FREE (200K tokens)
- OpenAI GPT-4 Mini: ~$10-15 (testing)
- MongoDB Atlas: FREE (512MB)
- Domain (optional): $12/year
- **Total: $10-15/month**

**Month 3+ (Light traffic, <1000 users/month):**
- Netlify: FREE
- Redis: FREE or $14/month (if exceed 30MB)
- HuggingFace: $9/month (if exceed free tier)
- OpenAI: $20-30/month (with 70% cache hit rate)
- **Total: $29-44/month**

**Scaling (>5000 users/month):**
- Consider Railway/Render for backend ($10-20/month)
- Upgrade Redis ($14-40/month based on storage)
- OpenAI costs increase linearly with usage
- **Total: $60-100/month**

***

This comprehensive plan gives you everything needed to build Museum of Lost Internet in 8 weeks. The key is **discipline with the timeline**, **clear communication**, and **smart use of AI tools** to accelerate without sacrificing learning.
