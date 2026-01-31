# 🏛️ Archivio

**Museum of Lost Internet** - A captivating, educational platform preserving extinct internet culture through interactive 3D/AR experiences.

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 20+
- Redis (optional for local dev)

### Backend
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # Edit with your credentials
cd src
python -m uvicorn api.main:app --reload
```
API available at `http://localhost:8000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
App available at `http://localhost:5173`

## 📁 Project Structure

```
archivio/
├── backend/              # FastAPI backend
│   ├── src/
│   │   ├── api/         # Routes & main app
│   │   ├── core/        # Config, database
│   │   ├── models/      # Pydantic schemas
│   │   └── services/    # Business logic
│   ├── netlify/         # Serverless functions
│   └── DEVLOG.md        # Backend changelog
│
├── frontend/             # React + Three.js frontend
│   └── DEVLOG.md        # Frontend changelog
│
├── TODO.md              # Short-term tasks
├── FIXME.md             # Known issues
├── ROADMAP.md           # Long-term vision
└── PLAN.md              # Complete project plan
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Three.js, React Three Fiber, A-Frame, TailwindCSS |
| Backend | FastAPI, Mangum (serverless) |
| Database | Redis Cloud (vectors), MongoDB Atlas (backup) |
| AI | HuggingFace (embeddings), OpenAI GPT-4 Mini (context) |
| Hosting | Netlify (free tier) |

## 👥 Team

- **Keshav** - Backend, AI, Infrastructure
- **Anzal** - Frontend, 3D/AR, UX

## 📄 License

MIT
