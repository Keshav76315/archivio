/**
 * Submit Page - ATSV Style
 * -------------------------
 * ATSV form for submitting URLs to be archived
 * Cream background, styled inputs, category pills
 */

import { useState } from "react";
import CRTMonitor from "../components/Retro/CRTMonitor";

const categories = [
  { id: "geocities", name: "GeoCities", icon: "🌐", color: "cyan" },
  { id: "myspace", name: "MySpace", icon: "👤", color: "magenta" },
  { id: "flash", name: "Flash Content", icon: "🎮", color: "yellow" },
  { id: "forum", name: "Forums/BBS", icon: "💬", color: "pink" },
  { id: "blog", name: "Early Blogs", icon: "📝", color: "orange" },
  { id: "other", name: "Other", icon: "📦", color: "cyan" },
];

function Submit() {
  const [formData, setFormData] = useState({
    url: "",
    category: "",
    year: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.url || !formData.category) return;

    setSubmitted(true);

    setTimeout(() => {
      setFormData({ url: "", category: "", year: "", notes: "" });
      setSubmitted(false);
    }, 3000);
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
            📝 SUBMIT
          </h1>
          <p
            style={{
              color: "var(--sub-heading-color)",
              fontFamily: "'VT323', monospace",
            }}
          >
            Help preserve internet history
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <CRTMonitor title="submit_url.exe" variant="atsv">
            <div className="p-6" style={{ background: "#0a0a0a" }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* URL Input */}
                  <div>
                    <label
                      className="block mb-2 spidey-font"
                      style={{ color: "var(--accent-cyan)" }}
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
                        background: "#111",
                        border: "2px solid var(--accent-cyan)",
                        color: "var(--phosphor-green)",
                        fontFamily: "'VT323', monospace",
                        outline: "none",
                      }}
                    />
                    <div className="text-xs mt-1" style={{ color: "#666" }}>
                      Wayback Machine links preferred
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label
                      className="block mb-2 spidey-font"
                      style={{ color: "var(--accent-cyan)" }}
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
                          aria-pressed={formData.category === cat.id}
                          className="p-3 rounded text-center transition-all hover-wiggle"
                          style={{
                            background:
                              formData.category === cat.id
                                ? `var(--accent-${cat.color})`
                                : "#111",
                            border: `2px solid ${
                              formData.category === cat.id
                                ? `var(--accent-${cat.color})`
                                : "#333"
                            }`,
                            color:
                              formData.category === cat.id
                                ? "var(--outline-black)"
                                : "#888",
                          }}
                        >
                          <span className="text-xl block">{cat.icon}</span>
                          <span
                            className="text-xs"
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
                      className="block mb-2 spidey-font"
                      style={{ color: "var(--accent-cyan)" }}
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
                        background: "#111",
                        border: "2px solid #333",
                        color: "var(--phosphor-green)",
                        fontFamily: "'VT323', monospace",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      className="block mb-2 spidey-font"
                      style={{ color: "var(--accent-cyan)" }}
                    >
                      📋 Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Any additional context..."
                      rows={3}
                      className="w-full px-4 py-3 rounded resize-none"
                      style={{
                        background: "#111",
                        border: "2px solid #333",
                        color: "var(--phosphor-green)",
                        fontFamily: "'VT323', monospace",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-lg action-btn hover-wiggle"
                    style={{
                      background: "var(--accent-cyan)",
                      color: "var(--outline-black)",
                      fontFamily: "'SpiderVerse', sans-serif",
                    }}
                  >
                    📤 SUBMIT TO ARCHIVE
                  </button>
                </form>
              ) : (
                /* Success state */
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 animate-float">✅</div>
                  <h3
                    className="text-2xl font-bold mb-2 spidey-font"
                    style={{ color: "var(--phosphor-green)" }}
                  >
                    SUBMITTED!
                  </h3>
                  <p
                    style={{ color: "#888", fontFamily: "'VT323', monospace" }}
                  >
                    Thank you for helping preserve internet history.
                  </p>
                  <p className="text-sm mt-2" style={{ color: "#666" }}>
                    Your submission will be reviewed shortly.
                  </p>
                </div>
              )}
            </div>
          </CRTMonitor>

          {/* Guidelines */}
          <div className="mt-8 light-panel p-6">
            <h3
              className="font-bold mb-3 spidey-font"
              style={{ color: "var(--outline-black)" }}
            >
              📚 Submission Guidelines
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--outline-black)", opacity: 0.8 }}
            >
              <li>✓ Preferably link to archived versions (Wayback Machine)</li>
              <li>✓ Focus on pre-2010 web content</li>
              <li>✓ Include context when possible</li>
              <li>✗ No illegal or harmful content</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Submit;
