/**
 * CRT Monitor Frame Component
 * ---------------------------
 * Reusable retro CRT monitor that displays content
 * Three variants: smooth (realistic), pixel (8-bit), 4bit (chunky retro)
 */

import { useState, forwardRef } from "react";

// Smooth realistic CRT frame
function CRTFrameSmooth({ children, title = "display.exe", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Monitor outer bezel - realistic plastic look */}
      <div
        className="rounded-2xl p-6"
        style={{
          background:
            "linear-gradient(145deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 70%, #1a1a1a 100%)",
          boxShadow: `
            inset 2px 2px 4px rgba(255,255,255,0.15),
            inset -2px -2px 4px rgba(0,0,0,0.3),
            8px 8px 30px rgba(0,0,0,0.6)
          `,
        }}
      >
        {/* Brand label */}
        <div className="text-center mb-2">
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: "#888" }}
          >
            ARCHIVIO™
          </span>
        </div>

        {/* Screen bezel (inner) */}
        <div
          className="rounded-lg p-1"
          style={{
            background: "#1a1a1a",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)",
          }}
        >
          {/* Screen */}
          <div
            className="rounded relative overflow-hidden"
            style={{
              background: "#0a0a0a",
              boxShadow: "inset 0 0 60px rgba(0,255,204,0.08)",
            }}
          >
            {/* Scanline effect */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)",
                opacity: 0.5,
              }}
            />

            {/* Screen curve shadow */}
            <div
              className="absolute inset-0 pointer-events-none z-20 rounded"
              style={{
                boxShadow: "inset 0 0 80px 30px rgba(0,0,0,0.4)",
              }}
            />

            {/* Title bar */}
            <div
              className="flex items-center justify-between px-3 py-1 relative z-10"
              style={{
                background: "linear-gradient(90deg, #000080 0%, #1084d0 100%)",
                borderBottom: "1px solid #000",
              }}
            >
              <span
                className="text-white text-xs font-bold"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                {title}
              </span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-400 flex items-center justify-center text-xs font-bold">
                  _
                </div>
                <div className="w-3 h-3 bg-gray-400 flex items-center justify-center text-xs font-bold">
                  □
                </div>
                <div className="w-3 h-3 bg-red-500 flex items-center justify-center text-xs font-bold text-white">
                  ×
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="relative z-10 bg-black">{children}</div>
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-600" />
          <div className="w-4 h-4 rounded-full bg-green-600 border-2 border-green-700 shadow-lg shadow-green-500/50" />
        </div>
      </div>

      {/* Monitor stand */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-8"
          style={{
            background: "linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)",
          }}
        />
        <div
          className="w-28 h-3 rounded-b"
          style={{
            background: "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)",
          }}
        />
      </div>
    </div>
  );
}

// Pixelated 8-bit style CRT frame
function CRTFramePixel({ children, title = "display.exe", className = "" }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ imageRendering: "pixelated" }}
    >
      {/* Pixel art outer frame */}
      <div
        className="p-4"
        style={{
          background: "#4a4a4a",
          border: "8px solid",
          borderColor: "#6a6a6a #2a2a2a #2a2a2a #6a6a6a",
          boxShadow: "8px 8px 0 #000",
        }}
      >
        {/* Brand */}
        <div className="text-center mb-2">
          <span
            className="text-xs font-bold tracking-widest"
            style={{
              color: "#00ff00",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "8px",
            }}
          >
            ARCHIVIO
          </span>
        </div>

        {/* Screen area */}
        <div
          style={{
            background: "#1a1a1a",
            border: "4px solid",
            borderColor: "#0a0a0a #3a3a3a #3a3a3a #0a0a0a",
          }}
        >
          {/* Screen */}
          <div
            className="relative"
            style={{
              background: "#000",
              border: "2px solid #0a0a0a",
            }}
          >
            {/* Pixel scanlines */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,0,0.03) 3px, rgba(0,255,0,0.03) 6px)",
              }}
            />

            {/* Title bar - pixel style */}
            <div
              className="flex items-center justify-between px-2 py-1 relative z-10"
              style={{
                background: "#0000aa",
                borderBottom: "2px solid #000",
              }}
            >
              <span
                className="text-white font-bold"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "8px",
                }}
              >
                {title}
              </span>
              <div className="flex gap-1">
                <div
                  className="w-4 h-4 flex items-center justify-center text-black font-bold"
                  style={{
                    background: "#c0c0c0",
                    border: "2px solid",
                    borderColor: "#fff #808080 #808080 #fff",
                    fontSize: "8px",
                  }}
                >
                  ×
                </div>
              </div>
            </div>

            {/* Content area - normal rendering for content */}
            <div
              className="relative z-10"
              style={{ background: "#000", imageRendering: "auto" }}
            >
              {children}
            </div>
          </div>
        </div>

        {/* Pixel buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <div
            className="w-3 h-3"
            style={{
              background: "#404040",
              border: "2px solid",
              borderColor: "#606060 #202020 #202020 #606060",
            }}
          />
          <div
            className="w-3 h-3"
            style={{
              background: "#00ff00",
              border: "2px solid",
              borderColor: "#80ff80 #008000 #008000 #80ff80",
              boxShadow: "0 0 8px #00ff00",
            }}
          />
        </div>
      </div>

      {/* Pixel stand */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-6"
          style={{
            background: "#3a3a3a",
            borderLeft: "4px solid #4a4a4a",
            borderRight: "4px solid #2a2a2a",
          }}
        />
        <div
          className="w-20 h-3"
          style={{
            background: "#2a2a2a",
            borderTop: "2px solid #3a3a3a",
          }}
        />
      </div>
    </div>
  );
}

// 4-bit chunky pixelated frame (frame pixelated, content normal)
function CRTFrame4Bit({ children, title = "display.exe", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Super chunky outer frame */}
      <div
        style={{
          imageRendering: "pixelated",
          background: "#2f2f2f",
          border: "16px solid",
          borderColor: "#5f5f5f #1f1f1f #1f1f1f #5f5f5f",
          boxShadow: "12px 12px 0 #000",
        }}
      >
        {/* Brand - big chunky pixels */}
        <div className="text-center py-2" style={{ background: "#3f3f3f" }}>
          <span
            style={{
              color: "#00ffcc",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
              textShadow: "4px 4px 0 #005555",
              letterSpacing: "4px",
            }}
          >
            ▓▓ ARCHIVIO ▓▓
          </span>
        </div>

        {/* Chunky inner bezel */}
        <div
          className="m-2"
          style={{
            background: "#0f0f0f",
            border: "8px solid",
            borderColor: "#0a0a0a #2a2a2a #2a2a2a #0a0a0a",
          }}
        >
          {/* Title bar - super chunky */}
          <div
            className="flex items-center justify-between px-2 py-2"
            style={{
              background:
                "linear-gradient(90deg, #000088 0%, #0044aa 50%, #000088 100%)",
              borderBottom: "4px solid #000044",
              imageRendering: "pixelated",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                textShadow: "2px 2px 0 #000",
              }}
            >
              ► {title}
            </span>
            <div className="flex gap-2">
              {/* Chunky window buttons */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#c0c0c0",
                  border: "4px solid",
                  borderColor: "#ffffff #606060 #606060 #ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "8px",
                }}
              >
                _
              </div>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#ff4444",
                  border: "4px solid",
                  borderColor: "#ff8888 #880000 #880000 #ff8888",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "8px",
                  color: "#fff",
                }}
              >
                X
              </div>
            </div>
          </div>

          {/* Content area - NORMAL quality rendering */}
          <div
            className="relative"
            style={{
              background: "#000",
              imageRendering: "auto", // Normal quality for content
            }}
          >
            {/* Subtle CRT glow effect */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                boxShadow: "inset 0 0 40px rgba(0,255,204,0.1)",
              }}
            />
            {children}
          </div>
        </div>

        {/* Chunky control panel */}
        <div
          className="flex items-center justify-center gap-4 py-3"
          style={{
            background: "#3f3f3f",
            borderTop: "4px solid #2f2f2f",
          }}
        >
          {/* Power indicator */}
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#004400",
              border: "4px solid",
              borderColor: "#006600 #002200 #002200 #006600",
            }}
          />
          {/* Power LED */}
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#00ff00",
              border: "4px solid",
              borderColor: "#88ff88 #008800 #008800 #88ff88",
              boxShadow: "0 0 16px #00ff00, 0 0 32px #00ff00",
            }}
          />
          {/* Volume slider visual */}
          <div
            style={{
              width: "60px",
              height: "8px",
              background: "#1f1f1f",
              border: "2px solid",
              borderColor: "#0f0f0f #3f3f3f #3f3f3f #0f0f0f",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "100%",
                background: "#00ccff",
              }}
            />
          </div>
        </div>
      </div>

      {/* Chunky stand */}
      <div
        className="flex flex-col items-center"
        style={{ imageRendering: "pixelated" }}
      >
        <div
          style={{
            width: "48px",
            height: "24px",
            background: "#2f2f2f",
            borderLeft: "8px solid #4f4f4f",
            borderRight: "8px solid #1f1f1f",
          }}
        />
        <div
          style={{
            width: "80px",
            height: "12px",
            background: "#1f1f1f",
            border: "4px solid",
            borderColor: "#3f3f3f #0f0f0f #0f0f0f #3f3f3f",
          }}
        />
      </div>
    </div>
  );
}

// Main export with frame switcher
const CRTMonitor = forwardRef(
  (
    {
      children,
      title = "display.exe",
      variant = "smooth", // 'smooth', 'pixel', or '4bit'
      className = "",
      showSwitcher = false,
      onVariantChange,
    },
    ref,
  ) => {
    const [currentVariant, setCurrentVariant] = useState(variant);

    const handleVariantChange = (v) => {
      setCurrentVariant(v);
      onVariantChange?.(v);
    };

    const frames = {
      smooth: CRTFrameSmooth,
      pixel: CRTFramePixel,
      "4bit": CRTFrame4Bit,
    };

    const Frame = frames[currentVariant] || CRTFrameSmooth;

    return (
      <div ref={ref} className="relative">
        {/* Frame variant switcher */}
        {showSwitcher && (
          <div className="absolute -top-12 right-0 z-30 flex gap-2">
            <button
              onClick={() => handleVariantChange("smooth")}
              className={`px-3 py-1 text-xs font-bold transition-all ${
                currentVariant === "smooth"
                  ? "bg-cyan-400 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              style={{
                border: "2px solid",
                borderColor: currentVariant === "smooth" ? "#00ffcc" : "#444",
              }}
            >
              Smooth
            </button>
            <button
              onClick={() => handleVariantChange("pixel")}
              className={`px-3 py-1 text-xs font-bold transition-all ${
                currentVariant === "pixel"
                  ? "bg-green-400 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "8px",
                border: "2px solid",
                borderColor: currentVariant === "pixel" ? "#00ff00" : "#444",
              }}
            >
              Pixel
            </button>
            <button
              onClick={() => handleVariantChange("4bit")}
              className={`px-3 py-1 text-xs font-bold transition-all ${
                currentVariant === "4bit"
                  ? "bg-purple-400 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "8px",
                border: "2px solid",
                borderColor: currentVariant === "4bit" ? "#cc00ff" : "#444",
              }}
            >
              4-Bit
            </button>
          </div>
        )}

        <Frame title={title} className={className}>
          {children}
        </Frame>
      </div>
    );
  },
);

CRTMonitor.displayName = "CRTMonitor";

export default CRTMonitor;
export { CRTFrameSmooth, CRTFramePixel, CRTFrame4Bit };
