/**
 * Timeline Page - ATSV Style
 * ---------------------------
 * Interactive timeline with ATSV aesthetic
 * Cream background, colored decade badges, ATSV CRT
 */

import { useState } from "react";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Timeline data by decade
const decades = [
  {
    id: "1990s",
    years: [1995, 1996, 1997, 1998, 1999],
    color: "yellow",
    icon: "📟",
    highlight: "The birth of the web",
  },
  {
    id: "2000s",
    years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
    color: "cyan",
    icon: "💿",
    highlight: "Web 2.0 revolution",
  },
  {
    id: "2010s",
    years: [2010, 2011, 2012, 2013, 2014],
    color: "magenta",
    icon: "📱",
    highlight: "Mobile takes over",
  },
];

// Sample events per year
const yearEvents = {
  1996: [
    { name: "GeoCities launches", type: "milestone" },
    { name: "First web pages archived", type: "event" },
  ],
  1999: [
    { name: "Y2K preparations", type: "event" },
    { name: "Napster changes music", type: "milestone" },
  ],
  2003: [
    { name: "MySpace goes live", type: "milestone" },
    { name: "Flash games peak", type: "event" },
  ],
  2005: [
    { name: "YouTube launches", type: "milestone" },
    { name: "Web 2.0 coined", type: "event" },
  ],
  2006: [{ name: "Twitter begins", type: "milestone" }],
};

function Timeline() {
  const [selectedYear, setSelectedYear] = useState(null);

  const events = selectedYear ? yearEvents[selectedYear] || [] : [];

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
            📅 TIMELINE
          </h1>
          <p
            style={{
              color: "var(--sub-heading-color)",
              fontFamily: "'VT323', monospace",
            }}
          >
            Navigate through internet history
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Decade selector */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {decades.map((decade) => (
              <button
                key={decade.id}
                onClick={() => setSelectedYear(decade.years[0])}
                className="group flex flex-col items-center px-6 py-4 transition-all hover-wiggle light-panel"
              >
                <span className="text-3xl mb-2">{decade.icon}</span>
                <span
                  className="font-bold spidey-font"
                  style={{ color: `var(--accent-${decade.color})` }}
                >
                  {decade.id}
                </span>
                <span
                  className="text-xs mt-1"
                  style={{ color: "var(--outline-black)", opacity: 0.7 }}
                >
                  {decade.highlight}
                </span>
              </button>
            ))}
          </div>

          {/* Year timeline strip */}
          <div className="relative py-8 mb-8 overflow-x-auto light-panel">
            {/* Timeline line */}
            <div
              className="absolute top-1/2 left-4 right-4 h-1"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-cyan) 50%, var(--accent-magenta) 100%)",
              }}
            />

            {/* Year dots */}
            <div className="flex justify-between items-center min-w-[800px] px-8">
              {decades
                .flatMap((d) => d.years)
                .map((year) => {
                  const isSelected = selectedYear === year;
                  const decade = decades.find((d) => d.years.includes(year));

                  return (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className="flex flex-col items-center group"
                    >
                      {/* Dot */}
                      <div
                        className={`rounded-full transition-all ${isSelected ? "w-6 h-6" : "w-4 h-4 group-hover:w-5 group-hover:h-5"}`}
                        style={{
                          background: `var(--accent-${decade.color})`,
                          border: "2px solid var(--outline-black)",
                          boxShadow: isSelected
                            ? `0 0 15px var(--accent-${decade.color})`
                            : "none",
                        }}
                      />
                      {/* Year label */}
                      <span
                        className={`mt-2 transition-all ${isSelected ? "font-bold" : ""}`}
                        style={{
                          fontFamily: "'VT323', monospace",
                          fontSize: isSelected ? "16px" : "12px",
                          color: isSelected ? "var(--outline-black)" : "#888",
                        }}
                      >
                        {year}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Selected year display */}
          {selectedYear && (
            <div className="max-w-lg mx-auto">
              <CRTMonitor title={`archive_${selectedYear}.exe`} variant="atsv">
                <div
                  className="min-h-[300px] p-4"
                  style={{ background: "#0a0a0a" }}
                >
                  {/* Year header */}
                  <div className="text-center mb-6">
                    <div
                      className="text-5xl font-bold mb-2 spidey-font"
                      style={{
                        color: "var(--accent-cyan)",
                        textShadow: "0 0 10px var(--accent-cyan)",
                      }}
                    >
                      {selectedYear}
                    </div>
                    <div style={{ color: "#666" }}>
                      {events.length} notable events
                    </div>
                  </div>

                  {/* Events list */}
                  {events.length > 0 ? (
                    <div className="space-y-3">
                      {events.map((event, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded"
                          style={{
                            background:
                              event.type === "milestone"
                                ? "rgba(0,229,255,0.1)"
                                : "#111",
                            border: `2px solid ${event.type === "milestone" ? "var(--accent-cyan)" : "#333"}`,
                          }}
                        >
                          <span className="text-xl">
                            {event.type === "milestone" ? "⭐" : "📌"}
                          </span>
                          <span
                            style={{
                              fontFamily: "'VT323', monospace",
                              color: "var(--phosphor-green)",
                            }}
                          >
                            {event.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8" style={{ color: "#666" }}>
                      <span className="text-4xl block mb-4">📂</span>
                      <p>No events archived for {selectedYear}</p>
                    </div>
                  )}

                  {/* Browse button */}
                  <div className="text-center mt-6">
                    <a
                      href={`/explore?year=${selectedYear}`}
                      className="inline-block action-btn"
                      style={{
                        background: "var(--accent-cyan)",
                        color: "var(--outline-black)",
                        fontFamily: "'SpiderVerse', sans-serif",
                      }}
                    >
                      Browse {selectedYear} Archives
                    </a>
                  </div>
                </div>
              </CRTMonitor>
            </div>
          )}

          {/* Instructions */}
          {!selectedYear && (
            <div className="text-center light-panel p-4 max-w-md mx-auto">
              <p style={{ color: "var(--outline-black)" }}>
                👆 Click a decade or year to explore
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Timeline;
