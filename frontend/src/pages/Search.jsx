/**
 * Search Page - Retro Web Style
 * ------------------------------
 * Retro search interface with CRT display for results
 */

import { useState } from "react";
import RetroPageWrapper from "../components/Retro/RetroPageWrapper";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Sample search results (mock data)
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
  const [frameVariant, setFrameVariant] = useState("smooth");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    // Simulate search delay
    setTimeout(() => {
      // Filter mock results based on query
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
    <RetroPageWrapper
      title="🔍 SEARCH"
      subtitle="Find lost websites and artifacts"
    >
      <div className="max-w-2xl mx-auto px-4 pb-24">
        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div
            className="flex gap-2 p-4 rounded-lg"
            style={{
              background: "rgba(0,0,0,0.6)",
              border: "2px solid #00ffcc",
              boxShadow: "0 0 20px rgba(0,255,204,0.2)",
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the archives..."
              className="flex-1 px-4 py-3 text-lg rounded"
              style={{
                background: "#0a0a0a",
                border: "2px inset #333",
                color: "#00ffcc",
                fontFamily: "'VT323', monospace",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 font-bold transition-all hover:scale-105"
              style={{
                background: "linear-gradient(180deg, #00ffcc 0%, #00aa88 100%)",
                color: "#000",
                border: "3px outset #00ffcc",
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
              }}
            >
              {isSearching ? "⏳" : "🔍"} SEARCH
            </button>
          </div>

          {/* Search tips */}
          <div className="text-center text-sm text-gray-500 mt-2">
            💡 Try: "geocities", "flash games", "myspace"
          </div>
        </form>

        {/* Results in CRT Monitor */}
        {hasSearched && (
          <CRTMonitor
            title="search_results.exe"
            variant={frameVariant}
            showSwitcher={true}
            onVariantChange={setFrameVariant}
          >
            <div className="min-h-[350px]" style={{ background: "#0a0a0a" }}>
              {/* Results header */}
              <div
                className="flex items-center justify-between px-3 py-2"
                style={{
                  background: "#1a1a2a",
                  borderBottom: "2px solid #333",
                }}
              >
                <span className="text-cyan-400">Query: "{query}"</span>
                <span className="text-gray-500 text-sm">
                  {results.length} results
                </span>
              </div>

              {/* Loading state */}
              {isSearching && (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4 animate-spin">💿</div>
                  <p
                    className="text-cyan-400"
                    style={{ fontFamily: "'VT323', monospace" }}
                  >
                    Searching archives...
                  </p>
                </div>
              )}

              {/* Results list */}
              {!isSearching && (
                <div className="max-h-[300px] overflow-y-auto">
                  {results.map((result, idx) => (
                    <button
                      key={result.id}
                      className="w-full flex items-center gap-3 px-3 py-3 text-left hover:bg-blue-900/50 transition-colors"
                      style={{
                        fontFamily: "'VT323', monospace",
                        borderBottom: "1px solid #222",
                      }}
                    >
                      {/* Icon */}
                      <span className="text-xl">
                        {result.type === "link" ? "🔗" : "💾"}
                      </span>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-cyan-400 truncate">
                          {result.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.domain} • {result.year}
                        </div>
                      </div>

                      {/* Match score */}
                      <div
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: result.score > 80 ? "#003300" : "#1a1a2a",
                          color: result.score > 80 ? "#00ff00" : "#888",
                        }}
                      >
                        {result.score}%
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Status bar */}
              <div
                className="flex justify-between items-center px-3 py-1 text-xs text-gray-500"
                style={{
                  background: "#1a1a2a",
                  borderTop: "2px solid #333",
                }}
              >
                <span>Powered by Archive.org</span>
                <span>🔗 = Link • 💾 = Download</span>
              </div>
            </div>
          </CRTMonitor>
        )}

        {/* Pre-search state */}
        {!hasSearched && (
          <div
            className="text-center py-16 rounded-lg"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "2px dashed #333",
            }}
          >
            <span className="text-6xl block mb-4">🔎</span>
            <p className="text-gray-400 mb-2">Enter a search query above</p>
            <p className="text-sm text-gray-600">
              Search across 2,847+ archived websites
            </p>
          </div>
        )}
      </div>
    </RetroPageWrapper>
  );
}

export default Search;
