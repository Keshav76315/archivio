/**
 * Search Page - ATSV Style
 * -------------------------
 * ATSV search interface with cream background and CRT results
 */

import { useState } from "react";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Sample search results
const mockResults = [
  {
    id: 1,
    name: "SpaceJam_Original",
    domain: "geocities",
    year: 1996,
    type: "link",
    score: 95,
  },
  {
    id: 2,
    name: "DOOM_Flash_Clone",
    domain: "flash",
    year: 2003,
    type: "download",
    score: 88,
  },
  {
    id: 3,
    name: "MySpace_Tom_Profile",
    domain: "myspace",
    year: 2005,
    type: "link",
    score: 82,
  },
  {
    id: 4,
    name: "Hampster_Dance_OG",
    domain: "misc",
    year: 1999,
    type: "link",
    score: 79,
  },
  {
    id: 5,
    name: "Neopets_Fanpage",
    domain: "geocities",
    year: 2001,
    type: "link",
    score: 71,
  },
];

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    // Simulate search delay
    setTimeout(() => {
      const filtered = mockResults.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.domain.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered.length > 0 ? filtered : mockResults.slice(0, 3));
      setIsSearching(false);
    }, 800);
  };

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
            🔍 SEARCH
          </h1>
          <p
            style={{
              color: "var(--sub-heading-color)",
              fontFamily: "'VT323', monospace",
            }}
          >
            Find lost websites and artifacts
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Search form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2 p-4 light-panel">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the archives..."
                aria-label="Search the archives"
                className="flex-1 px-4 py-3 text-lg rounded"
                style={{
                  background: "var(--outline-black)",
                  border: "2px solid var(--accent-cyan)",
                  color: "var(--phosphor-green)",
                  fontFamily: "'VT323', monospace",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={isSearching}
                className="action-btn hover-wiggle"
                style={{
                  background: "var(--accent-cyan)",
                  color: "var(--outline-black)",
                  fontFamily: "'SpiderVerse', sans-serif",
                }}
              >
                {isSearching ? "⏳" : "🔍"} SEARCH
              </button>
            </div>

            {/* Search tips */}
            <div
              className="text-center text-sm mt-2"
              style={{ color: "var(--outline-black)", opacity: 0.6 }}
            >
              💡 Try: "geocities", "flash games", "myspace"
            </div>
          </form>

          {/* Results in CRT Monitor */}
          {hasSearched && (
            <CRTMonitor title="search_results.exe" variant="atsv">
              <div className="min-h-[350px]" style={{ background: "#0a0a0a" }}>
                {/* Results header */}
                <div
                  className="flex items-center justify-between px-3 py-2"
                  style={{
                    background: "#111",
                    borderBottom: "2px solid var(--accent-cyan)",
                  }}
                >
                  <span
                    className="spidey-font"
                    style={{ color: "var(--phosphor-green)" }}
                  >
                    Results for: "{query}"
                  </span>
                  <span style={{ color: "#666" }}>{results.length} found</span>
                </div>

                {/* Loading state */}
                {isSearching ? (
                  <div className="text-center py-16">
                    <div className="text-4xl mb-4 animate-spin-slow">🔍</div>
                    <p
                      style={{
                        color: "var(--phosphor-green)",
                        fontFamily: "'VT323', monospace",
                      }}
                    >
                      Searching archives...
                    </p>
                  </div>
                ) : (
                  /* Results list */
                  <div className="max-h-[300px] overflow-y-auto">
                    {results.map((result) => (
                      <button
                        key={result.id}
                        className="w-full flex items-center gap-3 px-3 py-3 text-left transition-colors"
                        style={{
                          fontFamily: "'VT323', monospace",
                          borderBottom: "1px solid #333",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(0,229,255,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <span className="text-lg">
                          {result.type === "link" ? "🔗" : "💾"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div
                            className="truncate"
                            style={{ color: "var(--phosphor-green)" }}
                          >
                            {result.name}
                          </div>
                          <div className="text-xs" style={{ color: "#666" }}>
                            {result.domain} • {result.year}
                          </div>
                        </div>
                        <div
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            background:
                              result.score > 85
                                ? "var(--accent-cyan)"
                                : "var(--accent-yellow)",
                            color: "var(--outline-black)",
                          }}
                        >
                          {result.score}%
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </CRTMonitor>
          )}

          {/* No search yet */}
          {!hasSearched && (
            <div className="text-center light-panel p-8">
              <span className="text-5xl block mb-4">🔎</span>
              <p
                className="spidey-font"
                style={{ color: "var(--outline-black)" }}
              >
                Enter a search term to find archived content
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
