/**
 * Retro Page Wrapper
 * ------------------
 * Reusable wrapper with starfield, grid, and floating 3D objects
 * Use this to wrap all retro-styled pages
 */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  FloppyDisk,
  CompactDisc,
  CassetteTape,
  VHSTape,
  GameController,
  PixelStar,
} from "../3D/RetroObjects";

// 3D scene with floating retro objects
function RetroScene({ showObjects = true }) {
  return (
    <>
      <Stars radius={100} depth={50} count={2000} factor={4} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#ff00aa" intensity={0.3} />

      {showObjects && (
        <Suspense fallback={null}>
          {/* Floating retro items */}
          <FloppyDisk position={[-6, 2, -5]} scale={0.5} color="#0066cc" />
          <CompactDisc position={[7, -1, -6]} scale={0.6} />
          <CassetteTape position={[-5, -3, -4]} scale={0.4} color="#ff6600" />
          <VHSTape position={[6, 3, -7]} scale={0.3} color="#333" />
          <GameController position={[-7, 0, -8]} scale={0.4} color="#cc0000" />

          {/* Decorative stars */}
          <PixelStar position={[-4, 4, -3]} scale={0.5} color="#00ffcc" />
          <PixelStar position={[5, 2, -4]} scale={0.4} color="#ff00aa" />
          <PixelStar position={[3, -3, -5]} scale={0.3} color="#ffff00" />
        </Suspense>
      )}
    </>
  );
}

function RetroPageWrapper({
  children,
  title,
  subtitle,
  showObjects = true,
  className = "",
}) {
  return (
    <div
      className={`min-h-screen relative ${className}`}
      style={{
        background: "#1a0a2e",
        fontFamily: "'VT323', 'Courier New', monospace",
      }}
    >
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <RetroScene showObjects={showObjects} />
        </Canvas>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%2300ffcc' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Page Header */}
        {title && (
          <div className="text-center pt-8 pb-4 px-4">
            <h1
              className="text-4xl md:text-6xl font-bold mb-2"
              style={{
                color: "#00ffcc",
                textShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              {title}
            </h1>
            {subtitle && <p style={{ color: "#ff00aa" }}>{subtitle}</p>}
          </div>
        )}

        {/* Main content */}
        {children}
      </div>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
      `}</style>
    </div>
  );
}

export default RetroPageWrapper;
