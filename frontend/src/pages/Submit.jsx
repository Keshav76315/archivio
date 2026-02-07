/**
 * Submit Page - Retro Web Style
 * ------------------------------
 * Retro form for submitting URLs to be archived
 */

import { useState } from "react";
import RetroPageWrapper from "../components/Retro/RetroPageWrapper";
import CRTMonitor from "../components/Retro/CRTMonitor";

const categories = [
  { id: "geocities", name: "GeoCities", icon: "🌐" },
  { id: "myspace", name: "MySpace", icon: "👤" },
  { id: "flash", name: "Flash Content", icon: "🎮" },
  { id: "forum", name: "Forums/BBS", icon: "💬" },
  { id: "blog", name: "Early Blogs", icon: "📝" },
  { id: "other", name: "Other", icon: "📦" },
];

function Submit() {
  const [formData, setFormData] = useState({
    url: "",
    category: "",
    year: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [frameVariant, setFrameVariant] = useState("smooth");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.url || !formData.category) return;

    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ url: "", category: "", year: "", notes: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <RetroPageWrapper
      title="📝 SUBMIT"
      subtitle="Help preserve internet history"
    >
      <div className="max-w-xl mx-auto px-4 pb-24">
        <CRTMonitor
          title="submit_url.exe"
          variant={frameVariant}
          showSwitcher={true}
          onVariantChange={setFrameVariant}
        >
          <div className="p-6" style={{ background: "#0a0a0a" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* URL Input */}
                <div>
                  <label
                    className="block mb-2 text-cyan-400"
                    style={{ fontFamily: "'VT323', monospace" }}
                  >
                    🔗 Website URL *
                  </label>
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                    placeholder="https://web.archive.org/web/..."
                    required
                    className="w-full px-4 py-3 rounded"
                    style={{
                      background: "#1a1a2a",
                      border: "2px inset #333",
                      color: "#fff",
                      fontFamily: "'VT323', monospace",
                      outline: "none",
                    }}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    Wayback Machine links preferred
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label
                    className="block mb-2 text-cyan-400"
                    style={{ fontFamily: "'VT323', monospace" }}
                  >
                    📁 Category *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, category: cat.id })
                        }
                        className={`
                          p-3 rounded text-center transition-all
                          ${
                            formData.category === cat.id
                              ? "bg-cyan-400/20 border-cyan-400"
                              : "bg-gray-900 border-gray-700 hover:border-gray-500"
                          }
                        `}
                        style={{
                          border: `2px solid ${formData.category === cat.id ? "#00ffcc" : "#333"}`,
                        }}
                      >
                        <span className="text-xl block">{cat.icon}</span>
                        <span
                          className="text-xs text-gray-300"
                          style={{ fontFamily: "'VT323', monospace" }}
                        >
                          {cat.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year estimate */}
                <div>
                  <label
                    className="block mb-2 text-cyan-400"
                    style={{ fontFamily: "'VT323', monospace" }}
                  >
                    📅 Year (estimate)
                  </label>
                  <input
                    type="number"
                    min="1990"
                    max="2015"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    placeholder="e.g. 1999"
                    className="w-full px-4 py-3 rounded"
                    style={{
                      background: "#1a1a2a",
                      border: "2px inset #333",
                      color: "#fff",
                      fontFamily: "'VT323', monospace",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Notes */}
                <div>
                  <label
                    className="block mb-2 text-cyan-400"
                    style={{ fontFamily: "'VT323', monospace" }}
                  >
                    📋 Notes (optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Why is this site significant?"
                    rows={3}
                    className="w-full px-4 py-3 rounded resize-none"
                    style={{
                      background: "#1a1a2a",
                      border: "2px inset #333",
                      color: "#fff",
                      fontFamily: "'VT323', monospace",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 font-bold transition-all hover:scale-102"
                  style={{
                    background:
                      "linear-gradient(180deg, #00ffcc 0%, #00aa88 100%)",
                    color: "#000",
                    border: "4px outset #00ffcc",
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: "12px",
                  }}
                >
                  📨 SUBMIT FOR REVIEW
                </button>

                {/* Guidelines */}
                <div
                  className="p-4 rounded mt-4"
                  style={{
                    background: "#1a1a2a",
                    border: "2px solid #333",
                  }}
                >
                  <div className="text-sm text-gray-400 mb-2 font-bold">
                    📋 Submission Guidelines:
                  </div>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>✓ Submit extinct or notable early web pages</li>
                    <li>✓ Wayback Machine links are preferred</li>
                    <li>✓ Focus on culturally significant content</li>
                    <li>✗ No adult or illegal content</li>
                  </ul>
                </div>
              </form>
            ) : (
              /* Success state */
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-bounce">✅</div>
                <h3
                  className="text-xl text-cyan-400 mb-2"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: "14px",
                  }}
                >
                  SUBMITTED!
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  Thanks for helping preserve the web!
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  We'll review your submission soon.
                </p>
              </div>
            )}
          </div>
        </CRTMonitor>
      </div>
    </RetroPageWrapper>
  );
}

export default Submit;
