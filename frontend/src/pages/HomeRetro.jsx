/**
 * Home Page - Option A: Retro Web Revival
 * ----------------------------------------
 * Pixel fonts, hit counters, CRT frames, 90s web aesthetic
 */

import { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import {
  FloppyDisk,
  CompactDisc,
  CassetteTape,
  GameController,
  PixelStar,
} from "../components/3D/RetroObjects";

// Spinning cube for 3D preview
function SpinningCube() {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ffcc" wireframe />
    </mesh>
  );
}

// Background scene with floating retro objects
function BackgroundScene() {
  return (
    <>
      <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#ff00aa" intensity={0.3} />
      <Suspense fallback={null}>
        <FloppyDisk position={[-8, 3, -8]} scale={0.6} color="#0066cc" />
        <CompactDisc position={[9, -2, -10]} scale={0.8} />
        <CassetteTape position={[-7, -4, -6]} scale={0.5} color="#ff6600" />
        <GameController position={[8, 4, -9]} scale={0.5} color="#cc0000" />
        <PixelStar position={[-5, 5, -5]} scale={0.6} color="#00ffcc" />
        <PixelStar position={[6, -3, -7]} scale={0.4} color="#ff00aa" />
        <PixelStar position={[0, 4, -6]} scale={0.3} color="#ffff00" />
      </Suspense>
    </>
  );
}

// CRT Monitor Frame Component
function CRTMonitor({ children }) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "500px" }}>
      {/* Monitor outer bezel */}
      <div
        className="rounded-lg p-4"
        style={{
          background:
            "linear-gradient(145deg, #4a4a4a 0%, #2a2a2a 50%, #1a1a1a 100%)",
          boxShadow:
            "inset 2px 2px 4px rgba(255,255,255,0.1), 4px 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Screen area */}
        <div
          className="rounded overflow-hidden relative"
          style={{
            background: "#000",
            boxShadow: "inset 0 0 50px rgba(0,255,204,0.1)",
          }}
        >
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          />
          {/* CRT curve effect */}
          <div
            className="absolute inset-0 pointer-events-none z-10 rounded"
            style={{
              boxShadow: "inset 0 0 100px 40px rgba(0,0,0,0.5)",
            }}
          />
          {children}
        </div>
        {/* Monitor buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
        </div>
      </div>
      {/* Monitor stand */}
      <div className="mx-auto w-20 h-8 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg" />
      <div className="mx-auto w-32 h-3 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg" />
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
  return <span className={visible ? "opacity-100" : "opacity-0"}>▌</span>;
}

// Marquee text
function Marquee({ children }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">{children}</div>
    </div>
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
    <div
      className="min-h-screen"
      style={{
        background: "#1a0a2e",
        fontFamily: "'VT323', 'Courier New', monospace",
      }}
    >
      {/* 3D Background with floating retro objects */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <BackgroundScene />
        </Canvas>
      </div>

      {/* Tiled background pattern */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none' stroke='%2300ffcc' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-24 px-4">
        {/* Under Construction Banner */}
        <div
          className="max-w-4xl mx-auto mb-8 p-2 text-center"
          style={{
            background:
              "repeating-linear-gradient(45deg, #ffff00, #ffff00 10px, #000 10px, #000 20px)",
          }}
        >
          <span
            className="inline-block px-4 py-1 text-black font-bold text-lg"
            style={{ background: "#ffff00" }}
          >
            🚧 WELCOME TO ARCHIVIO 🚧
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              color: "#00ffcc",
              textShadow:
                "0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc",
              fontFamily: "'Press Start 2P', 'VT323', monospace",
              letterSpacing: "0.1em",
            }}
          >
            ★ ARCHIVIO ★
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: "#ff00aa" }}>
            ~ Museum of Lost Internet ~
          </p>
        </div>

        {/* CRT Monitor with 3D Preview */}
        <div className="mb-12">
          <CRTMonitor>
            <div className="aspect-[4/3] relative">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SpinningCube />
              </Canvas>
              {/* Exhibit label */}
              <div
                className="absolute bottom-4 left-4 right-4 text-center py-2 px-4"
                style={{
                  background: "rgba(0,0,0,0.8)",
                  border: "2px solid #00ffcc",
                  color: "#00ffcc",
                }}
              >
                Now showing: {exhibits[currentExhibit]}
                <BlinkingCursor />
              </div>
            </div>
          </CRTMonitor>
        </div>

        {/* Navigation Buttons - Windows 95 style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { to: "/explore", label: "📁 Enter Museum", primary: true },
            { to: "/search", label: "🔍 Search Archives" },
            { to: "/submit", label: "📝 Sign Guestbook" },
            { to: "/about", label: "❓ About" },
          ].map((btn) => (
            <Link
              key={btn.to}
              to={btn.to}
              className="block px-6 py-3 text-lg font-bold transition-all"
              style={{
                background: btn.primary
                  ? "linear-gradient(180deg, #00ffcc 0%, #00aa88 100%)"
                  : "linear-gradient(180deg, #c0c0c0 0%, #808080 100%)",
                color: btn.primary ? "#000" : "#000",
                border: "3px outset #e0e0e0",
                boxShadow: "2px 2px 0 #000",
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "12px",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.border = "3px inset #808080";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.border = "3px outset #e0e0e0";
                e.currentTarget.style.boxShadow = "2px 2px 0 #000";
              }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Visitor Counter */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-6 py-3 rounded"
            style={{
              background: "#000",
              border: "3px ridge #00ffcc",
            }}
          >
            <span style={{ color: "#00ffcc" }}>☆ You are visitor #</span>
            <span
              style={{
                color: "#ff00aa",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              {visitorCount.toString().padStart(6, "0")}
            </span>
            <span style={{ color: "#00ffcc" }}> ☆</span>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="max-w-4xl mx-auto py-2 mb-12 overflow-hidden"
          style={{
            background: "#000",
            border: "2px solid #ff00aa",
            color: "#ffff00",
          }}
        >
          <div className="whitespace-nowrap animate-marquee">
            ★ Welcome to Archivio! ★ Preserving internet history since 2026 ★
            Over 2,847 websites archived ★ Explore GeoCities, MySpace, Flash
            games and more! ★ Submit your favorite old websites ★
          </div>
        </div>

        {/* Best Viewed Badge */}
        <div className="text-center pb-12">
          <div
            className="inline-block p-4 text-sm"
            style={{
              background: "#000",
              border: "2px groove #808080",
              color: "#c0c0c0",
            }}
          >
            <div className="mb-2">Best viewed with</div>
            <div className="flex items-center justify-center gap-2">
              <span>🌐</span>
              <span>Netscape Navigator 4.0+</span>
            </div>
            <div className="mt-2 text-xs" style={{ color: "#808080" }}>
              800x600 resolution • 256 colors
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default HomeRetro;
