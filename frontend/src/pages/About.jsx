/**
 * About Page - Retro Web Style
 * -----------------------------
 * About the project with retro aesthetic
 */

import RetroPageWrapper from "../components/Retro/RetroPageWrapper";
import CRTMonitor from "../components/Retro/CRTMonitor";

const team = [{ name: "Keshav", role: "Creator", icon: "👨‍💻" }];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Three.js", icon: "🎮" },
  { name: "FastAPI", icon: "🐍" },
  { name: "Redis", icon: "🔴" },
  { name: "Archive.org", icon: "📚" },
];

function About() {
  return (
    <RetroPageWrapper title="❓ ABOUT" subtitle="The story behind Archivio">
      <div className="max-w-2xl mx-auto px-4 pb-24 space-y-8">
        {/* Mission */}
        <CRTMonitor title="readme.txt">
          <div className="p-6" style={{ background: "#0a0a0a" }}>
            <h2
              className="text-xl mb-4 text-cyan-400"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "14px",
              }}
            >
              Our Mission
            </h2>
            <div
              className="text-gray-300 space-y-4"
              style={{ fontFamily: "'VT323', monospace", fontSize: "18px" }}
            >
              <p>
                The early internet was a beautiful, chaotic place. GeoCities
                neighborhoods, MySpace profiles with auto-playing music, Flash
                games that defined a generation.
              </p>
              <p>Most of it is gone now. But not forgotten.</p>
              <p className="text-cyan-400">
                Archivio is a digital museum dedicated to preserving and
                celebrating the lost wonders of the early web.
              </p>
            </div>
          </div>
        </CRTMonitor>

        {/* How it works */}
        <div
          className="p-6 rounded-lg"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "2px solid #333",
          }}
        >
          <h2
            className="text-lg mb-6 text-center text-cyan-400"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
            }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              {
                step: "01",
                icon: "🔍",
                label: "Discover",
                desc: "Find archived sites",
              },
              {
                step: "02",
                icon: "🤖",
                label: "Preserve",
                desc: "AI-enhanced context",
              },
              {
                step: "03",
                icon: "🏛️",
                label: "Exhibit",
                desc: "Browse in 3D museum",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-2">
                <div className="text-4xl">{item.icon}</div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  STEP {item.step}
                </div>
                <div
                  className="text-cyan-400 font-bold"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div
          className="p-6 rounded-lg"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "2px solid #333",
          }}
        >
          <h2
            className="text-lg mb-4 text-center text-cyan-400"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
            }}
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded"
                style={{
                  background: "#1a1a2a",
                  border: "1px solid #333",
                }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span
                  className="text-gray-300"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div
          className="p-6 rounded-lg"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "2px solid #333",
          }}
        >
          <h2
            className="text-lg mb-4 text-center text-cyan-400"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
            }}
          >
            Credits
          </h2>
          <div className="text-center space-y-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex items-center justify-center gap-3"
              >
                <span className="text-3xl">{member.icon}</span>
                <div>
                  <div className="text-white font-bold">{member.name}</div>
                  <div className="text-xs text-gray-500">{member.role}</div>
                </div>
              </div>
            ))}

            <div
              className="pt-4 mt-4 text-sm text-gray-500"
              style={{ borderTop: "1px solid #333" }}
            >
              <p>Archived content provided by</p>
              <a
                href="https://archive.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Internet Archive (archive.org)
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Keshav76315/archivio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded transition-all hover:scale-105"
            style={{
              background: "#1a1a2a",
              border: "2px solid #333",
              color: "#00ffcc",
              fontFamily: "'VT323', monospace",
            }}
          >
            ⭐ GitHub
          </a>
          <a
            href="https://archive.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded transition-all hover:scale-105"
            style={{
              background: "#1a1a2a",
              border: "2px solid #333",
              color: "#ff00aa",
              fontFamily: "'VT323', monospace",
            }}
          >
            📚 Archive.org
          </a>
        </div>
      </div>
    </RetroPageWrapper>
  );
}

export default About;
