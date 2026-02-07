/**
 * Header Component
 * ----------------
 * Fixed navigation header with glass morphism and futuristic styling
 * Per PROMPTS.md spec #6
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/explore", label: "Explore" },
  { to: "/timeline", label: "Timeline" },
  { to: "/search", label: "Search" },
  { to: "/submit", label: "Submit" },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for header opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-header h-20
        backdrop-blur-lg border-b border-cyanSubtle
        transition-all duration-300
        ${isScrolled ? "bg-bg-base/90" : "bg-bg-base/60"}
      `}
    >
      <nav className="max-w-7xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo icon */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-DEFAULT to-purple-DEFAULT flex items-center justify-center">
            <svg
              className="w-6 h-6 text-bg-base"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.18 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.68l-7-3.5V8.82zm9 11.18v-7.68l7-3.5v7.68l-7 3.5z" />
            </svg>
          </div>

          {/* Brand text */}
          <span className="font-display text-xl font-bold text-gradient group-hover:opacity-80 transition-opacity">
            ARCHIVIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                relative font-medium transition-colors duration-300 hover-underline
                ${
                  isActive(link.to)
                    ? "text-cyan-DEFAULT"
                    : "text-text-secondary hover:text-white"
                }
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-DEFAULT glow-cyan" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Section - Stats + GitHub */}
        <div className="hidden md:flex items-center gap-4">
          {/* Stats Pill */}
          <div className="glass px-3 py-1.5 rounded-full text-xs text-text-secondary">
            <span className="text-cyan-DEFAULT font-semibold">2,847</span>{" "}
            exhibits archived
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/Keshav76315/archivio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-cyan-DEFAULT transition-colors"
            title="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-text-secondary transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-secondary transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-secondary transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 top-20 bg-bg-base/95 backdrop-blur-lg
          transition-all duration-300 z-modal
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                font-display text-2xl font-semibold transition-colors
                ${isActive(link.to) ? "text-gradient" : "text-text-secondary hover:text-white"}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen
                  ? "slideUp 0.5s ease-out forwards"
                  : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
