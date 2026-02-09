#  ARCHIVIO

**The Museum of Lost Internet**

> _"The web is a playground. Explore the glitch."_

Archivio is a digital museum dedicated to preserving and celebrating the chaotic beauty of the early web (Web 1.0 & 2.0). Reimagined with a **Neo-Retro Glitch** aesthetic, it combines retro nostalgia with modern glitch art, vibrant colors, and 3D interactive elements to create an immersive browsing experience.

## 🌟 Features

### 🎨 Visual Identity (Neo-Retro Style)

- **Glitch & Noise:** CRT monitor overlays, chromatic aberration, and digital noise effects.
- **Vibrant Palette:** A striking mix of **Deep Purple**, **Neon Cyan**, **Magenta**, and **Phosphor Green** against a **Cream** or **Dark** background.
- **Typography:** Uses bold, comic-style fonts for an urban feel, coupled with "VT323" for retro terminal text.

### 🌗 Adaptive Dark Mode

- **Light Mode:** Cream background with dark outlines and vibrant accents.
- **Dark Mode:** Deep purple/black background with neon outlines and glowing text.
- Toggle seamlessly via the **Settings** page or **Navbar**.

### 🧭 Core Experience

- **📅 Timeline:** Traverse internet history by decade (90s, 00s, 10s) with curated milestones.
- **📁 Explore:** Browse categorized archives (GeoCities, Flash Games, MySpace, Forums).
- **🔍 Search:** Find specific digital artifacts with a retro search interface.
- **📝 Submit:** Contribute URL submissions to the archive.
- **⚙️ Settings:** Customize your view (Toggle CRT Scanlines, Animations, Theme).
- **🎮 3D Integrations:** Floating retro objects and interactive 3D elements powered by React Three Fiber.

## 🛠️ Tech Stack

| Layer        | Technology           | Description                 |
| :----------- | :------------------- | :-------------------------- |
| **Frontend** | **React 18**         | UI Library                  |
|              | **Vite**             | Build Tool                  |
|              | **Tailwind CSS**     | Styling Framework           |
|              | **Three.js / R3F**   | 3D Graphics                 |
|              | **Framer Motion**    | Animations                  |
| **Backend**  | **Python (FastAPI)** | API Framework               |
|              | **Redis**            | Caching & Data Store        |
| **Database** | **MongoDB**          | Persistent Storage (Backup) |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.10+)
- Redis (optional for local dev)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Keshav76315/archivio.git
cd archivio
```

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv .venv
# Windows
.venv\Scripts\activate
# Mac/Linux
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env  # Configure your environment variables
cd src
python -m uvicorn api.main:app --reload
```

_Backend runs on: `http://localhost:8000`_

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

_Frontend runs on: `http://localhost:5173`_

## 📂 Project Structure

```
archivio/
├── backend/              # FastAPI Python Backend
│   ├── src/
│   │   ├── api/          # Route handlers
│   │   ├── core/         # Configuration & Database
│   │   ├── services/     # Business logic
│
├── frontend/             # React Frontend
│   ├── public/           # Static assets (fonts, icons)
│   ├── src/
│   │   ├── components/   # Reusable UI components (Retro, 3D, Layout)
│   │   ├── context/      # React Contex (ThemeContext)
│   │   ├── pages/        # Page components (Home, Timeline, About, etc.)
│   │   ├── App.jsx       # Main App component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles & Tailwind directives
│
└── docs/                 # Documentation
    ├── README.md         # This file
    ├── API_CONTRACT.md   # API Specification
    └── CONTRIBUTING.md   # Contribution Guidelines
```

## 🤝 Contributing

We welcome fellow archivists! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Made by <strong>Keshav Ghai</strong>
</p>
