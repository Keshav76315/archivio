/**
 * Home Page - ATSV Style
 * ----------------------
 * No navbar (buttons serve as navigation)
 * Cream background, ATSV CRT, Spider-Verse font
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Spinning cube for 3D preview
function SpinningCube() {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00e5ff" wireframe />
    </mesh>
  );
}

// Floating retro objects background
function FloatingObjects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute animate-float"
        style={{ top: "15%", left: "5%" }}
      >
        <span className="text-4xl opacity-40">💾</span>
      </div>
      <div
        className="absolute animate-float-delay-1"
        style={{ top: "25%", right: "8%" }}
      >
        <span className="text-4xl opacity-40">💿</span>
      </div>
      <div
        className="absolute animate-float-delay-2"
        style={{ top: "60%", left: "10%" }}
      >
        <span className="text-3xl opacity-40">📼</span>
      </div>
      <div
        className="absolute animate-float"
        style={{ top: "70%", right: "12%" }}
      >
        <span className="text-3xl opacity-40">🎮</span>
      </div>
      <div
        className="absolute animate-float-delay-1"
        style={{ top: "40%", left: "3%" }}
      >
        <span className="text-2xl opacity-30">⭐</span>
      </div>
      <div
        className="absolute animate-float-delay-2"
        style={{ top: "50%", right: "5%" }}
      >
        <span className="text-2xl opacity-30">✨</span>
      </div>
    </div>
  );
}

// Blinking cursor
function BlinkingCursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className={visible ? "opacity-100" : "opacity-0"}
      style={{ color: "var(--phosphor-green)" }}
    >
      ▌
    </span>
  );
}

function HomeRetro() {
  const [visitorCount] = useState(2847);
  const [currentExhibit, setCurrentExhibit] = useState(0);

  const exhibits = [
    "GeoCities",
    "MySpace",
    "Newgrounds",
    "Neopets",
    "Hamster Dance",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExhibit((i) => (i + 1) % exhibits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ background: "var(--bg-cream)", minHeight: "100vh" }}>
      {/* Glitch Header Bar */}
      <div className="glitch-bar noise-bg" />

      {/* Floating Objects */}
      <FloatingObjects />

      {/* Content */}
      <div className="relative z-10 pt-8 px-4">
        {/* Main Title - With glitch effect */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 glitch-text spidey-font"
            style={{
              color: "var(--outline-black)",
              letterSpacing: "0.05em",
            }}
          >
            ARCHIVIO
          </h1>
          <p
            className="text-xl md:text-2xl typing-cursor"
            style={{
              color: "var(--sub-heading-color)",
              fontFamily: "'VT323', monospace",
            }}
          >
            Museum of Lost Internet
          </p>
        </div>

        {/* CRT Monitor - Using shared component */}
        <div className="max-w-xl mx-auto mb-12">
          <CRTMonitor title="exhibit.exe" variant="atsv">
            <div
              className="aspect-[4/3] relative"
              style={{ background: "#0a0a0a" }}
            >
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SpinningCube />
              </Canvas>
              {/* Exhibit label */}
              <div
                className="absolute bottom-4 left-4 right-4 text-center py-2 px-4"
                style={{
                  background: "rgba(0,0,0,0.9)",
                  border: "2px solid var(--accent-cyan)",
                  color: "var(--phosphor-green)",
                  fontFamily: "'VT323', monospace",
                }}
              >
                Now showing: {exhibits[currentExhibit]}
                <BlinkingCursor />
              </div>
            </div>
          </CRTMonitor>
        </div>

        {/* Navigation Buttons - All pages */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { to: "/explore", label: "📁 Enter Museum", color: "cyan" },
            { to: "/timeline", label: "📅 Timeline", color: "orange" },
            { to: "/search", label: "🔍 Search", color: "magenta" },
            { to: "/submit", label: "📝 Submit", color: "yellow" },
            { to: "/about", label: "❓ About", color: "pink" },
          ].map((btn) => (
            <Link
              key={btn.to}
              to={btn.to}
              className="block px-6 py-3 font-bold transition-all hover-wiggle action-btn"
              style={{
                background: `var(--accent-${btn.color})`,
                color:
                  btn.color === "magenta" ? "white" : "var(--outline-black)",
                fontFamily: "'SpiderVerse', 'Space Grotesk', sans-serif",
                fontSize: "14px",
              }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Visitor Counter */}
        <div className="text-center mb-12">
          <div className="inline-block light-panel px-6 py-3">
            <span style={{ color: "var(--outline-black)" }}>
              ☆ You are visitor #
            </span>
            <span
              className="spidey-font"
              style={{ color: "var(--accent-magenta)" }}
            >
              {visitorCount.toString().padStart(6, "0")}
            </span>
            <span style={{ color: "var(--outline-black)" }}> ☆</span>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="max-w-4xl mx-auto py-2 mb-12 overflow-hidden"
          style={{
            background: "var(--outline-black)",
            border: "3px solid var(--accent-magenta)",
            color: "var(--accent-yellow)",
            fontFamily: "'VT323', monospace",
          }}
        >
          <div className="whitespace-nowrap animate-marquee">
            ★ Preserving internet history since 2026 ★ Over 2,847 websites
            archived ★ Explore GeoCities, MySpace, Flash games and more! ★
            Submit your favorite old websites ★
          </div>
        </div>

        {/* Best Viewed Badge */}
        <div className="text-center pb-12">
          <div className="inline-block light-panel p-4 text-sm">
            <div
              className="mb-2 spidey-font"
              style={{ color: "var(--outline-black)" }}
            >
              Best viewed with
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="animate-spin-slow">🌐</span>
              <span
                style={{
                  color: "var(--accent-cyan)",
                  fontFamily: "'VT323', monospace",
                }}
              >
                Netscape Navigator 4.0+
              </span>
            </div>
            <div
              className="mt-2 text-xs"
              style={{ color: "var(--outline-black)", opacity: 0.6 }}
            >
              800x600 resolution • 256 colors
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
}

export default HomeRetro;
