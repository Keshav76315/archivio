/**
 * Hero Section Component
 * ----------------------
 * Full viewport hero with Three.js canvas background, glass morphism panel,
 * gradient text, and neon CTA buttons per PROMPTS.md spec #1
 */

import { Link } from "react-router-dom";
import MuseumScene from "../3D/MuseumScene";
import GlassPanel from "../UI/GlassPanel";
import Button from "../UI/Button";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Three.js Canvas Background */}
      <div className="canvas-container">
        <MuseumScene />
      </div>

      {/* Scan-line Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)",
          opacity: 0.5,
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10, 14, 39, 0.7) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="content-overlay min-h-screen flex items-center justify-center px-4 py-20">
        <GlassPanel
          variant="dark"
          withCornerBrackets
          className="max-w-3xl w-full p-8 md:p-12 text-center animate-fade-in"
        >
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">ARCHIVIO</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-10 max-w-xl mx-auto">
            Where lost websites find immortality
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/explore">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] animate-pulse-glow"
              >
                Enter the Museum
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-cyan-DEFAULT">
                2,847
              </p>
              <p className="text-xs md:text-sm text-text-muted mt-1">
                Exhibits
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-purple-DEFAULT">
                25+
              </p>
              <p className="text-xs md:text-sm text-text-muted mt-1">
                Years Archived
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-amber-DEFAULT">
                ∞
              </p>
              <p className="text-xs md:text-sm text-text-muted mt-1">
                Memories
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-DEFAULT/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-DEFAULT rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
