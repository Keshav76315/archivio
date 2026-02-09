/**
 * Retro Navigation Bar - ATSV Style
 * ----------------------------------
 * Bright, funky navigation with cream background, dark mode toggle
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/explore", label: "EXPLORE" },
  { to: "/timeline", label: "TIMELINE" },
  { to: "/about", label: "ABOUT" },
  { to: "/submit", label: "SUBMIT" },
];

function RetroNavbar() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [clockTime, setClockTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  );

  // Live clock update
  useEffect(() => {
    const interval = setInterval(() => {
      setClockTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top navigation bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "var(--bg-cream)",
          borderBottom: "3px solid var(--outline-black)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <div className="flex items-center justify-between px-4 py-2 max-w-6xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg hover-wiggle"
            style={{ color: "var(--outline-black)" }}
          >
            <span
              className="text-xl p-1"
              style={{
                background: "var(--outline-black)",
                color: "var(--phosphor-green)",
              }}
            >
              📁
            </span>
            <span
              className="glitch-text hidden sm:inline"
              style={{ fontFamily: "'VT323', monospace", fontSize: "1.5rem" }}
            >
              ARCHIVIO
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-2 md:px-4 py-2 text-xs md:text-sm font-bold transition-all hover-wiggle"
                  style={{
                    background: isActive
                      ? "var(--accent-yellow)"
                      : "transparent",
                    color: "var(--outline-black)",
                    border: isActive
                      ? "2px solid var(--outline-black)"
                      : "2px solid transparent",
                    boxShadow: isActive
                      ? "3px 3px 0 var(--outline-black)"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right section: Dark mode, Settings, Clock, Login */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded transition-all hover-wiggle"
              style={{
                background: isDarkMode
                  ? "var(--accent-cyan)"
                  : "var(--outline-black)",
                color: isDarkMode
                  ? "var(--outline-black)"
                  : "var(--phosphor-green)",
                border: "2px solid var(--outline-black)",
              }}
              aria-label="Toggle dark mode"
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            {/* Search Icon */}
            <Link
              to="/search"
              className="p-2 rounded transition-all hover-wiggle"
              style={{
                background:
                  location.pathname === "/search"
                    ? "var(--accent-yellow)"
                    : "transparent",
                color: "var(--outline-black)",
                border:
                  location.pathname === "/search"
                    ? "2px solid var(--outline-black)"
                    : "2px solid transparent",
              }}
              aria-label="Search"
              title="Search"
            >
              🔍
            </Link>

            {/* Settings */}
            <Link
              to="/settings"
              className="p-2 rounded transition-all hover-wiggle"
              style={{
                background:
                  location.pathname === "/settings"
                    ? "var(--accent-yellow)"
                    : "transparent",
                color: "var(--outline-black)",
                border:
                  location.pathname === "/settings"
                    ? "2px solid var(--outline-black)"
                    : "2px solid transparent",
              }}
              aria-label="Settings"
              title="Settings"
            >
              ⚙️
            </Link>

            {/* Clock */}
            <span
              className="text-xs hidden md:block"
              style={{
                fontFamily: "monospace",
                color: "var(--outline-black)",
                opacity: 0.6,
              }}
            >
              {clockTime}
            </span>

            {/* Login button */}
            <button
              className="action-btn action-btn-dark text-xs md:text-sm"
              style={{ padding: "6px 12px" }}
            >
              🔑 Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-14" />
    </>
  );
}

export default RetroNavbar;
