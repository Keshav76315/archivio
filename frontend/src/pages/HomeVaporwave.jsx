/**
 * Home Page - Option C: Vaporwave Archive
 * ----------------------------------------
 * Sunset gradients, geometric shapes, Windows 95 dialogs, surreal nostalgia
 */

import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-3, 1, -2]}>
          <meshStandardMaterial
            color="#ff71ce"
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Box args={[0.8, 0.8, 0.8]} position={[3, 0.5, -3]}>
          <meshStandardMaterial
            color="#01cdfe"
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
      </Float>
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.5, 0.2, 16, 32]} position={[0, 2, -4]}>
          <meshStandardMaterial
            color="#b967ff"
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>
    </group>
  );
}

// Windows 95 style dialog box
function Win95Dialog({ title, children, className = "", style = {} }) {
  return (
    <div
      className={`bg-gray-300 ${className}`}
      style={{
        border: "2px solid",
        borderColor: "#ffffff #808080 #808080 #ffffff",
        boxShadow: "2px 2px 0 #000",
        ...style,
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-2 py-1"
        style={{
          background: "linear-gradient(90deg, #000080 0%, #1084d0 100%)",
        }}
      >
        <span
          className="text-white text-sm font-bold"
          style={{ fontFamily: "Tahoma, sans-serif" }}
        >
          {title}
        </span>
        <div className="flex gap-1">
          <button
            className="w-4 h-4 text-xs font-bold flex items-center justify-center"
            style={{
              background: "#c0c0c0",
              border: "1px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
            }}
          >
            _
          </button>
          <button
            className="w-4 h-4 text-xs font-bold flex items-center justify-center"
            style={{
              background: "#c0c0c0",
              border: "1px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
            }}
          >
            ×
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}

// Win95 Button
function Win95Button({ children, primary, to }) {
  const ButtonContent = () => (
    <button
      className={`px-6 py-2 text-sm font-bold ${primary ? "bg-gray-300" : "bg-gray-300"}`}
      style={{
        fontFamily: "Tahoma, sans-serif",
        border: "2px solid",
        borderColor: "#ffffff #808080 #808080 #ffffff",
        outline: primary ? "1px dotted #000" : "none",
        outlineOffset: "-4px",
      }}
    >
      {children}
    </button>
  );

  if (to) {
    return (
      <Link to={to}>
        <ButtonContent />
      </Link>
    );
  }
  return <ButtonContent />;
}

function HomeVaporwave() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ff71ce 0%, #01cdfe 35%, #05ffa1 65%, #b967ff 100%)",
      }}
    >
      {/* Checkered floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-0"
        style={{
          background: `
            linear-gradient(transparent 0%, rgba(0,0,0,0.3) 100%),
            repeating-conic-gradient(#ff71ce 0% 25%, #01cdfe 0% 50%) 
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* 3D floating shapes */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight
            position={[-10, -10, -10]}
            color="#ff71ce"
            intensity={0.5}
          />
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Palm tree silhouettes */}
      <div className="absolute bottom-0 left-8 z-10 text-8xl opacity-30">
        🌴
      </div>
      <div className="absolute bottom-0 right-8 z-10 text-8xl opacity-30">
        🌴
      </div>

      {/* Sun */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full z-0"
        style={{
          background:
            "linear-gradient(180deg, #ffff00 0%, #ff6b6b 50%, #ff71ce 100%)",
          boxShadow: "0 0 60px rgba(255,255,0,0.5)",
        }}
      >
        {/* Sun stripes */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 bg-purple-900/30"
              style={{
                height: "8px",
                top: `${20 + i * 15}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 pt-32 px-4">
        {/* Main title - Chrome effect */}
        <div className="text-center mb-8">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-wider"
            style={{
              fontFamily: "'Audiowide', sans-serif",
              background:
                "linear-gradient(180deg, #fff 0%, #a0a0a0 40%, #fff 50%, #606060 60%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
            }}
          >
            ARCHIVIO
          </h1>
          {/* Japanese text */}
          <p
            className="text-2xl mt-2 opacity-80"
            style={{
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            アーカイブ ・ 博物館
          </p>
        </div>

        {/* Windows 95 Dialog */}
        <div className="max-w-md mx-auto mb-8">
          <Win95Dialog title="welcome.exe">
            <div
              className="text-center"
              style={{ fontFamily: "Tahoma, sans-serif" }}
            >
              <p className="mb-4 text-sm">
                Welcome to Archivio - a digital museum preserving the lost
                wonders of the early internet.
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">🌐</span>
                <span className="font-bold">2,847 websites archived</span>
              </div>
              <div className="flex justify-center gap-4">
                <Win95Button to="/explore" primary>
                  Enter Museum
                </Win95Button>
                <Win95Button to="/about">About</Win95Button>
              </div>
            </div>
          </Win95Dialog>
        </div>

        {/* Additional dialogs */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          <Win95Dialog title="explore.exe" className="transform -rotate-1">
            <Link
              to="/explore"
              className="block text-center hover:underline"
              style={{ fontFamily: "Tahoma, sans-serif" }}
            >
              <span className="text-4xl block mb-2">📁</span>
              <span className="text-sm">Browse Archives</span>
            </Link>
          </Win95Dialog>

          <Win95Dialog title="search.exe" className="transform rotate-1">
            <Link
              to="/search"
              className="block text-center hover:underline"
              style={{ fontFamily: "Tahoma, sans-serif" }}
            >
              <span className="text-4xl block mb-2">🔍</span>
              <span className="text-sm">Search Database</span>
            </Link>
          </Win95Dialog>

          <Win95Dialog title="timeline.exe" className="transform rotate-2">
            <Link
              to="/timeline"
              className="block text-center hover:underline"
              style={{ fontFamily: "Tahoma, sans-serif" }}
            >
              <span className="text-4xl block mb-2">📅</span>
              <span className="text-sm">Time Travel</span>
            </Link>
          </Win95Dialog>

          <Win95Dialog title="submit.exe" className="transform -rotate-2">
            <Link
              to="/submit"
              className="block text-center hover:underline"
              style={{ fontFamily: "Tahoma, sans-serif" }}
            >
              <span className="text-4xl block mb-2">📝</span>
              <span className="text-sm">Submit URL</span>
            </Link>
          </Win95Dialog>
        </div>

        {/* VHS Static overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-30 opacity-5"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Glitch scanlines */}
        <div
          className="fixed inset-0 pointer-events-none z-30 opacity-10"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }}
        />
      </div>

      {/* Custom font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
      `}</style>
    </div>
  );
}

export default HomeVaporwave;
