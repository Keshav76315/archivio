/**
 * Timeline Page - Retro Web Style
 * --------------------------------
 * Interactive timeline with retro styling and 3D elements
 */

import { useState } from "react";
import RetroPageWrapper from "../components/Retro/RetroPageWrapper";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Timeline data by decade
const decades = [
  {
    id: "1990s",
    years: [1995, 1996, 1997, 1998, 1999],
    color: "#ffff00",
    icon: "📟",
    highlight: "The birth of the web",
  },
  {
    id: "2000s",
    years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
    color: "#00ffcc",
    icon: "💿",
    highlight: "Web 2.0 revolution",
  },
  {
    id: "2010s",
    years: [2010, 2011, 2012, 2013, 2014],
    color: "#ff00aa",
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
  const [frameVariant, setFrameVariant] = useState("smooth");

  const events = selectedYear ? yearEvents[selectedYear] || [] : [];

  return (
    <RetroPageWrapper
      title="📅 TIMELINE"
      subtitle="Navigate through internet history"
    >
      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* Decade selector */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {decades.map((decade) => (
            <button
              key={decade.id}
              onClick={() => setSelectedYear(decade.years[0])}
              className="group flex flex-col items-center px-6 py-4 rounded-lg transition-all hover:scale-105"
              style={{
                background: `${decade.color}20`,
                border: `2px solid ${decade.color}`,
                boxShadow: `0 0 20px ${decade.color}40`,
              }}
            >
              <span className="text-3xl mb-2">{decade.icon}</span>
              <span
                className="font-bold text-lg"
                style={{
                  color: decade.color,
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "12px",
                }}
              >
                {decade.id}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {decade.highlight}
              </span>
            </button>
          ))}
        </div>

        {/* Year timeline strip */}
        <div
          className="relative py-8 mb-8 overflow-x-auto"
          style={{
            background: "rgba(0,0,0,0.5)",
            borderTop: "2px solid #333",
            borderBottom: "2px solid #333",
          }}
        >
          {/* Timeline line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #ffff00 0%, #00ffcc 50%, #ff00aa 100%)",
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
                      className={`
                      w-4 h-4 rounded-full transition-all
                      ${isSelected ? "w-6 h-6 ring-4" : "hover:w-5 hover:h-5"}
                    `}
                      style={{
                        background: decade.color,
                        boxShadow: isSelected
                          ? `0 0 20px ${decade.color}`
                          : "none",
                        ringColor: `${decade.color}50`,
                      }}
                    />
                    {/* Year label */}
                    <span
                      className={`
                      mt-2 text-xs transition-all
                      ${isSelected ? "text-white font-bold" : "text-gray-500 group-hover:text-gray-300"}
                    `}
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: isSelected ? "16px" : "12px",
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
            <CRTMonitor
              title={`archive_${selectedYear}.exe`}
              variant={frameVariant}
              showSwitcher={true}
              onVariantChange={setFrameVariant}
            >
              <div
                className="min-h-[300px] p-4"
                style={{ background: "#0a0a0a" }}
              >
                {/* Year header */}
                <div className="text-center mb-6">
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{
                      color: "#00ffcc",
                      textShadow: "0 0 10px #00ffcc",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    {selectedYear}
                  </div>
                  <div className="text-gray-400 text-sm">
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
                            event.type === "milestone" ? "#003300" : "#1a1a2a",
                          border: `1px solid ${event.type === "milestone" ? "#00ff00" : "#333"}`,
                        }}
                      >
                        <span className="text-xl">
                          {event.type === "milestone" ? "⭐" : "📌"}
                        </span>
                        <span
                          className="text-white"
                          style={{ fontFamily: "'VT323', monospace" }}
                        >
                          {event.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <span className="text-4xl block mb-4">📂</span>
                    <p>No events archived for {selectedYear}</p>
                    <p className="text-sm mt-2">
                      Connect to backend to load data
                    </p>
                  </div>
                )}

                {/* Browse button */}
                <div className="text-center mt-6">
                  <a
                    href={`/explore?year=${selectedYear}`}
                    className="inline-block px-6 py-2 text-sm font-bold"
                    style={{
                      background:
                        "linear-gradient(180deg, #00ffcc 0%, #00aa88 100%)",
                      color: "#000",
                      border: "3px outset #00ffcc",
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: "10px",
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
          <div className="text-center text-gray-500 mt-8">
            <p>👆 Click a decade or year to explore</p>
          </div>
        )}
      </div>
    </RetroPageWrapper>
  );
}

export default Timeline;
