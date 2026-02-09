/**
 * Hero Section Component
 * ----------------------
 * Full viewport hero with Three.js canvas background
 * Updated with ATSV (Spider-Verse) aesthetic
 */

import MuseumScene from "../3D/MuseumScene";
import Button from "../UI/Button";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Three.js Canvas Background */}
      <div className="canvas-container">
        <MuseumScene />
      </div>

      {/* Diagonal Scan-line Overlay - ATSV style */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: `
            repeating-linear-gradient(-45deg, transparent 0px, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 6px)
          `,
          opacity: 0.6,
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(15, 10, 20, 0.8) 100%)",
        }}
      />

      {/* Hero Content - ATSV Panel */}
      <div className="content-overlay min-h-screen flex items-center justify-center px-4 py-20">
        <div
          className="max-w-3xl w-full p-8 md:p-12 text-center animate-fade-in relative"
          style={{
            background:
              "linear-gradient(145deg, var(--atsv-beige-light) 0%, var(--atsv-beige) 30%, var(--atsv-beige-dark) 100%)",
            border: "4px solid var(--outline-black)",
            boxShadow: "10px 10px 0 var(--outline-black)",
          }}
        >
          {/* Inner bezel */}
          <div
            className="absolute inset-4"
            style={{
              border: "3px solid var(--atsv-purple)",
              pointerEvents: "none",
            }}
          />

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 atsv-text-shadow"
            style={{
              color: "var(--outline-black)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            ARCHIVIO
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-xl mx-auto font-medium"
            style={{ color: "var(--atsv-purple)" }}
          >
            Where lost websites find immortality
          </p>

          {/* CTA Buttons - ATSV style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              to="/explore"
              className="atsv-btn atsv-btn-green min-w-[200px] text-base"
            >
              Enter the Museum
            </Button>
            <Button
              to="/about"
              className="atsv-btn atsv-btn-purple min-w-[200px] text-base"
            >
              Learn More
            </Button>
          </div>

          {/* Stats Row - ATSV styled */}
          <div
            className="mt-12 grid grid-cols-3 gap-6 pt-8 relative z-10"
            style={{ borderTop: "3px solid var(--outline-black)" }}
          >
            <div className="text-center">
              <p
                className="text-2xl md:text-3xl font-black"
                style={{ color: "var(--phosphor-green)" }}
              >
                2,847
              </p>
              <p
                className="text-xs md:text-sm mt-1 font-bold"
                style={{ color: "var(--atsv-purple)" }}
              >
                Exhibits
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-2xl md:text-3xl font-black"
                style={{ color: "var(--phosphor-cyan)" }}
              >
                25+
              </p>
              <p
                className="text-xs md:text-sm mt-1 font-bold"
                style={{ color: "var(--atsv-purple)" }}
              >
                Years Archived
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-2xl md:text-3xl font-black"
                style={{ color: "var(--phosphor-amber)" }}
              >
                ∞
              </p>
              <p
                className="text-xs md:text-sm mt-1 font-bold"
                style={{ color: "var(--atsv-purple)" }}
              >
                Memories
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - ATSV style */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div
          className="w-8 h-12 flex justify-center pt-3"
          style={{
            background: "var(--atsv-beige)",
            border: "3px solid var(--outline-black)",
            boxShadow: "3px 3px 0 var(--outline-black)",
          }}
        >
          <div
            className="w-2 h-3 animate-pulse"
            style={{ background: "var(--phosphor-green)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
