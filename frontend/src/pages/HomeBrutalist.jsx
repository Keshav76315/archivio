/**
 * Home Page - Option B: Neo-Brutalist
 * ------------------------------------
 * Massive typography, stark contrasts, exposed grid, raw aesthetic
 */

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomeBrutalist() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden cursor-crosshair"
      style={{
        background: "#ffffff",
        fontFamily: "'Space Grotesk', 'Arial Black', sans-serif",
      }}
    >
      {/* Exposed grid lines */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="fixed top-0 right-0 w-96 h-full pointer-events-none z-0"
        style={{
          background: "#ffff00",
          transform: "skewX(-15deg) translateX(100px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Top bar */}
        <div
          className="flex justify-between items-center px-8 py-4"
          style={{ borderBottom: "4px solid #000" }}
        >
          <div className="font-mono text-sm">
            {time.toLocaleTimeString("en-US", { hour12: false })}
          </div>
          <div className="font-mono text-sm">
            [{mousePos.x}, {mousePos.y}]
          </div>
        </div>

        {/* Main hero */}
        <div className="px-8 py-16">
          {/* Giant title */}
          <h1
            className="font-black leading-none tracking-tighter"
            style={{
              fontSize: "clamp(80px, 20vw, 250px)",
              color: "#000",
              WebkitTextStroke: "2px #000",
            }}
          >
            ARCHIVIO
          </h1>

          {/* Tagline with HTML decorations */}
          <div className="mt-8 flex items-start gap-4">
            <span className="font-mono text-sm" style={{ color: "#888" }}>
              {"<museum>"}
            </span>
            <p
              className="text-2xl md:text-4xl font-bold max-w-2xl"
              style={{ lineHeight: 1.2 }}
            >
              Where dead websites become immortal artifacts
            </p>
          </div>
          <div className="mt-4">
            <span className="font-mono text-sm" style={{ color: "#888" }}>
              {"</museum>"}
            </span>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 flex items-center gap-8"
            style={{ borderTop: "4px solid #000", paddingTop: "24px" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-full h-6"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #000-0 0, #000 20px, #fff 20px, #fff 40px)",
                  width: "200px",
                }}
              />
              <span className="font-mono font-bold text-xl">2,847</span>
              <span className="font-mono text-sm text-gray-500">ARCHIVED</span>
            </div>
          </div>

          {/* Navigation - Brutalist style */}
          <nav className="mt-16 space-y-4">
            {[
              { to: "/explore", label: "ENTER", desc: "Browse the collection" },
              {
                to: "/search",
                label: "SEARCH",
                desc: "Find specific artifacts",
              },
              { to: "/timeline", label: "TIMELINE", desc: "Navigate by era" },
              { to: "/submit", label: "SUBMIT", desc: "Contribute to archive" },
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="group block"
                style={{ borderBottom: "2px solid #000" }}
              >
                <div className="flex items-center justify-between py-6 px-4 transition-all group-hover:bg-yellow-300">
                  <div className="flex items-center gap-8">
                    <span
                      className="font-mono text-sm"
                      style={{ color: "#888" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl md:text-5xl font-black tracking-tight">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm hidden md:block">
                      {item.desc}
                    </span>
                    <span className="text-4xl transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Decorative scaffolding */}
          <div className="mt-24 grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-square"
                style={{
                  border: "2px solid #000",
                  background: i === 1 ? "#ffff00" : "transparent",
                }}
              />
            ))}
          </div>

          {/* Footer message */}
          <div className="mt-16 font-mono text-sm" style={{ color: "#888" }}>
            <p>{"<!-- Archivio is an open archive of extinct websites -->"}</p>
            <p>{"<!-- Built 2026 / React + Three.js -->"}</p>
          </div>
        </div>
      </div>

      {/* Floating corner bracket */}
      <div
        className="fixed bottom-8 right-8 w-24 h-24 pointer-events-none"
        style={{
          borderRight: "4px solid #000",
          borderBottom: "4px solid #000",
        }}
      />
      <div
        className="fixed top-24 left-8 w-24 h-24 pointer-events-none"
        style={{
          borderLeft: "4px solid #000",
          borderTop: "4px solid #000",
        }}
      />

      {/* Custom font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}

export default HomeBrutalist;
