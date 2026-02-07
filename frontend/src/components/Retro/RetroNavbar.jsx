/**
 * Retro Navigation Bar
 * ---------------------
 * Unified navigation component for all pages
 * Pixel art style with Windows 95 aesthetics
 */

import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "HOME", icon: "🏠" },
  { to: "/explore", label: "EXPLORE", icon: "📁" },
  { to: "/timeline", label: "TIMELINE", icon: "📅" },
  { to: "/search", label: "SEARCH", icon: "🔍" },
  { to: "/submit", label: "SUBMIT", icon: "📝" },
  { to: "/about", label: "ABOUT", icon: "❓" },
];

function RetroNavbar() {
  const location = useLocation();

  return (
    <>
      {/* Top taskbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "#c0c0c0",
          borderBottom: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          fontFamily: "'VT323', monospace",
        }}
      >
        <div className="flex items-center justify-between px-2 py-1">
          {/* Start button */}
          <button
            className="flex items-center gap-2 px-3 py-1 font-bold"
            style={{
              background: "#c0c0c0",
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              color: "#000",
            }}
          >
            <span className="text-lg">🖥️</span>
            <span
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "8px",
              }}
            >
              ARCHIVIO
            </span>
          </button>

          {/* Nav links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-1 px-3 py-1 text-sm transition-colors"
                  style={{
                    background: isActive ? "#000080" : "transparent",
                    color: isActive ? "#fff" : "#000",
                    border: isActive
                      ? "1px inset #808080"
                      : "1px solid transparent",
                  }}
                >
                  <span>{item.icon}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* System tray */}
          <div
            className="flex items-center gap-2 px-3 py-1 text-xs"
            style={{
              background: "#c0c0c0",
              border: "2px solid",
              borderColor: "#808080 #ffffff #ffffff #808080",
            }}
          >
            <span>🔊</span>
            <span style={{ fontFamily: "monospace" }}>
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-10" />
    </>
  );
}

export default RetroNavbar;
