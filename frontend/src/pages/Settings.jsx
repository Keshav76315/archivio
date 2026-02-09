/**
 * Settings Page - ATSV Style
 * ---------------------------
 * User preferences including dark mode toggle
 */

import { useTheme } from "../context/ThemeContext";
import CRTMonitor from "../components/Retro/CRTMonitor";

function Settings() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <main style={{ background: "var(--bg-cream)", minHeight: "100vh" }}>
      {/* Glitch Header Bar */}
      <div className="glitch-bar noise-bg" />

      <div className="relative z-10 pt-8 px-4 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-2 glitch-text spidey-font"
            style={{ color: "var(--outline-black)" }}
          >
            ⚙️ SETTINGS
          </h1>
          <p
            style={{
              color: "var(--sub-heading-color)",
              fontFamily: "'VT323', monospace",
            }}
          >
            Customize your experience
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <CRTMonitor title="preferences.exe" variant="atsv">
            <div className="p-6" style={{ background: "#0a0a0a" }}>
              {/* Dark Mode Toggle */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-4 spidey-font"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  🎨 Appearance
                </h3>

                <div
                  className="flex items-center justify-between p-4 rounded"
                  style={{ background: "#111", border: "2px solid #333" }}
                >
                  <div>
                    <p
                      className="font-bold"
                      style={{
                        color: "var(--phosphor-green)",
                        fontFamily: "'VT323', monospace",
                      }}
                    >
                      Dark Mode
                    </p>
                    <p className="text-xs" style={{ color: "#666" }}>
                      Switch between light and dark themes
                    </p>
                  </div>

                  <button
                    onClick={toggleDarkMode}
                    className="relative w-16 h-8 rounded-full transition-all hover-wiggle"
                    style={{
                      background: isDarkMode ? "var(--accent-cyan)" : "#333",
                      border: "2px solid var(--outline-black)",
                    }}
                  >
                    <div
                      className="absolute top-1 w-5 h-5 rounded-full transition-all"
                      style={{
                        left: isDarkMode ? "calc(100% - 24px)" : "4px",
                        background: isDarkMode
                          ? "var(--outline-black)"
                          : "#666",
                      }}
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center text-sm"
                      style={{
                        color: isDarkMode ? "var(--outline-black)" : "#888",
                      }}
                    >
                      {isDarkMode ? "🌙" : "☀️"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Display Settings */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-4 spidey-font"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  🖥️ Display
                </h3>

                <div className="space-y-3">
                  <div
                    className="flex items-center justify-between p-4 rounded"
                    style={{ background: "#111", border: "2px solid #333" }}
                  >
                    <div>
                      <p
                        className="font-bold"
                        style={{
                          color: "var(--phosphor-green)",
                          fontFamily: "'VT323', monospace",
                        }}
                      >
                        CRT Scanlines
                      </p>
                      <p className="text-xs" style={{ color: "#666" }}>
                        Enable retro CRT effect
                      </p>
                    </div>
                    <span className="tech-pill">Enabled</span>
                  </div>

                  <div
                    className="flex items-center justify-between p-4 rounded"
                    style={{ background: "#111", border: "2px solid #333" }}
                  >
                    <div>
                      <p
                        className="font-bold"
                        style={{
                          color: "var(--phosphor-green)",
                          fontFamily: "'VT323', monospace",
                        }}
                      >
                        Animations
                      </p>
                      <p className="text-xs" style={{ color: "#666" }}>
                        Enable funky animations
                      </p>
                    </div>
                    <span className="tech-pill">Enabled</span>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h3
                  className="text-lg font-bold mb-4 spidey-font"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  ℹ️ About
                </h3>

                <div
                  className="p-4 rounded text-center"
                  style={{ background: "#111", border: "2px solid #333" }}
                >
                  <p
                    className="spidey-font text-lg mb-2"
                    style={{ color: "var(--phosphor-green)" }}
                  >
                    ARCHIVIO
                  </p>
                  <p className="text-xs mb-2" style={{ color: "#666" }}>
                    Museum of Lost Internet
                  </p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    Version 1.0.0 • Made with 💖 by Keshav
                  </p>
                </div>
              </div>
            </div>
          </CRTMonitor>

          {/* Quick Actions */}
          <div className="mt-8 light-panel p-6">
            <h3
              className="font-bold mb-4 spidey-font"
              style={{ color: "var(--outline-black)" }}
            >
              ⚡ Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                className="action-btn hover-wiggle"
                style={{
                  background: "var(--accent-yellow)",
                  color: "var(--outline-black)",
                }}
              >
                🧹 Clear Cache
              </button>
              <button
                className="action-btn hover-wiggle"
                style={{
                  background: "var(--accent-pink)",
                  color: "var(--outline-black)",
                }}
              >
                📤 Export Data
              </button>
              <button
                className="action-btn hover-wiggle"
                style={{
                  background: "var(--accent-cyan)",
                  color: "var(--outline-black)",
                }}
              >
                🔄 Reset Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Settings;
