/**
 * About Page - ATSV Style
 * -----------------------
 * Bright, funky design with glitch effects, typing animations,
 * step circles, tech pills, and credits section
 */

import { useState, useEffect } from "react";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Typing animation hook
function useTypingAnimation(text, speed = 50) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
}

function About() {
  const missionText = useTypingAnimation(
    "The early internet was a beautiful, chaotic place. GeoCities neighborhoods, MySpace profiles with auto-playing music, Flash games that defined a generation.",
    30,
  );

  return (
    <main style={{ background: "var(--bg-cream)", minHeight: "100vh" }}>
      {/* Glitch Header Bar */}
      <div className="glitch-bar noise-bg" />

      {/* Hero Section */}
      <section className="py-8 px-4" style={{ background: "var(--bg-cream)" }}>
        <p
          className="text-center text-sm tracking-widest mb-8"
          style={{ color: "var(--outline-black)", opacity: 0.6 }}
        >
          THE STORY BEHIND ARCHIVIO
        </p>

        {/* CRT Monitor - Our Mission */}
        <div className="max-w-4xl mx-auto">
          <CRTMonitor title="mission.txt" variant="atsv">
            <div className="p-6 md:p-8" style={{ background: "#0a0a0a" }}>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 typing-cursor spidey-font"
                style={{ color: "var(--phosphor-green)" }}
              >
                {">"} Our Mission
              </h2>

              <p
                className="mb-4 leading-relaxed"
                style={{ color: "var(--phosphor-green)", opacity: 0.9 }}
              >
                {missionText}
              </p>

              <p className="mb-4" style={{ color: "#888" }}>
                Most of it is gone now.{" "}
                <span
                  className="px-2 py-1"
                  style={{ background: "var(--accent-pink)", color: "white" }}
                >
                  But not forgotten.
                </span>
              </p>

              <p style={{ color: "var(--phosphor-green)", opacity: 0.7 }}>
                Archivio is a digital museum dedicated to preserving and
                celebrating the lost wonders of the early web.
              </p>
            </div>
          </CRTMonitor>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="py-16 px-4"
        style={{ background: "var(--bg-cream-dark)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-block px-3 py-1 mb-8 text-sm font-mono"
            style={{
              background: "var(--outline-black)",
              color: "var(--phosphor-green)",
            }}
          >
            SYSTEM_PROCESS
          </div>

          <h2 className="section-header text-3xl mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                step: "01",
                title: "Discover",
                desc: "Find archived sites from the depths of the Wayback Machine",
                color: "cyan",
              },
              {
                icon: "🛡️",
                step: "02",
                title: "Preserve",
                desc: "AI-enhanced content verification and asset recovery",
                color: "magenta",
              },
              {
                icon: "🏛️",
                step: "03",
                title: "Exhibit",
                desc: "Browse in a curated 3D museum environment",
                color: "yellow",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`text-center animate-float${i > 0 ? `-delay-${i}` : ""}`}
              >
                <div className="step-circle mx-auto mb-4 hover-wiggle">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <span
                  className={`step-number step-number-${item.color} mb-2 inline-block`}
                >
                  Step {item.step}
                </span>
                <h3
                  className="text-lg font-bold mt-2 spidey-font"
                  style={{ color: "var(--outline-black)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--outline-black)", opacity: 0.7 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4" style={{ background: "var(--bg-cream)" }}>
        <div className="max-w-4xl mx-auto light-panel p-8">
          <h2 className="section-header text-2xl mb-8 text-center block">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Three.js", icon: "🎮" },
              { name: "FastAPI", icon: "⚡" },
              { name: "Redis", icon: "🔴" },
              { name: "Archive.org", icon: "📚" },
            ].map((tech) => (
              <div key={tech.name} className="tech-pill hover-wiggle">
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section
        className="py-16 px-4"
        style={{ background: "var(--bg-cream-dark)" }}
      >
        <div className="max-w-md mx-auto">
          <div className="credits-box">
            <h2
              className="text-2xl font-bold mb-4 spidey-font"
              style={{ color: "var(--outline-black)" }}
            >
              Credits
            </h2>

            <div
              className="flex items-center justify-center gap-4 py-4 mb-4"
              style={{
                background: "var(--bg-cream)",
                border: "2px solid var(--outline-black)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ background: "var(--accent-cyan)" }}
              >
                👨‍💻
              </div>
              <div className="text-left">
                <p
                  className="font-bold spidey-font"
                  style={{ color: "var(--outline-black)" }}
                >
                  Keshav
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--outline-black)", opacity: 0.7 }}
                >
                  Creator & Developer
                </p>
              </div>
            </div>

            <p
              className="text-sm mb-4"
              style={{ color: "white", opacity: 0.9 }}
            >
              Archived content provided by:
              <br />
              <a
                href="https://archive.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Internet Archive, Archive.org
              </a>
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/Keshav76315/archivio"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn action-btn-dark"
              >
                <span>⭐</span> GitHub
              </a>
              <a
                href="https://archive.org"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn action-btn-pink"
              >
                <span>📚</span> Archive.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
