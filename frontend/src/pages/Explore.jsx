/**
 * Explore Page - ATSV Style
 * --------------------------
 * Folder-based navigation with CRT monitor display
 * Cream background, ATSV components, Spider-Verse font
 */

import { useState } from "react";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Sample folder data
const folders = [
  {
    id: "geocities",
    name: "GeoCities",
    icon: "🌐",
    color: "cyan",
    desc: "Personal homepages from the 90s",
    count: 847,
  },
  {
    id: "flash",
    name: "Flash Games",
    icon: "🎮",
    color: "magenta",
    desc: "Classic Flash games & animations",
    count: 312,
  },
  {
    id: "myspace",
    name: "MySpace",
    icon: "👤",
    color: "yellow",
    desc: "Social profiles & music pages",
    count: 523,
  },
  {
    id: "forums",
    name: "Forums & BBS",
    icon: "💬",
    color: "pink",
    desc: "Discussion boards & communities",
    count: 189,
  },
  {
    id: "early-blogs",
    name: "Early Blogs",
    icon: "📝",
    color: "orange",
    desc: "LiveJournal, Blogspot originals",
    count: 276,
  },
  {
    id: "misc",
    name: "Miscellaneous",
    icon: "📦",
    color: "cyan",
    desc: "Uncategorized web artifacts",
    count: 134,
  },
];

// Sample items for folders
const folderItems = {
  geocities: [
    {
      id: 1,
      name: "JohnDoe_Homepage",
      type: "link",
      url: "https://web.archive.org/web/19990125/http://www.geocities.com/johndoe",
      year: 1999,
    },
    {
      id: 2,
      name: "CoolSite2000",
      type: "link",
      url: "https://web.archive.org/web/20000301/http://www.geocities.com/coolsite2000",
      year: 2000,
    },
    {
      id: 3,
      name: "MyPetPage",
      type: "link",
      url: "https://web.archive.org/web/19980215/http://www.geocities.com/mypetpage",
      year: 1998,
    },
    {
      id: 4,
      name: "Anime_Fan_99",
      type: "link",
      url: "https://web.archive.org/web/19990801/http://www.geocities.com/animefan99",
      year: 1999,
    },
  ],
  flash: [
    {
      id: 1,
      name: "StickFight_Classic.swf",
      type: "download",
      size: "2.4 MB",
      year: 2004,
    },
    {
      id: 2,
      name: "DressUp_Game.swf",
      type: "download",
      size: "1.8 MB",
      year: 2003,
    },
    {
      id: 3,
      name: "AlienHominid_Demo.swf",
      type: "download",
      size: "4.2 MB",
      year: 2002,
    },
    {
      id: 4,
      name: "BadgerBadger.swf",
      type: "download",
      size: "0.5 MB",
      year: 2003,
    },
  ],
  myspace: [
    {
      id: 1,
      name: "Tom_Official",
      type: "link",
      url: "https://web.archive.org/web/20060101/http://myspace.com/tom",
      year: 2006,
    },
    {
      id: 2,
      name: "IndieRockBand_2005",
      type: "link",
      url: "https://web.archive.org/web/20050601/http://myspace.com/indierockband",
      year: 2005,
    },
  ],
};

// ATSV styled folder card
function FolderCard({ folder, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center p-6 transition-all hover-wiggle light-panel"
      style={{ minWidth: "140px" }}
    >
      {/* Folder icon */}
      <div
        className="w-20 h-16 mb-3 rounded flex items-center justify-center text-3xl transition-transform group-hover:scale-110"
        style={{
          background: `var(--accent-${folder.color})`,
          border: "3px solid var(--outline-black)",
          boxShadow: "3px 3px 0 var(--outline-black)",
        }}
      >
        {folder.icon}
      </div>

      {/* Label */}
      <span
        className="text-center font-bold spidey-font"
        style={{ color: "var(--outline-black)" }}
      >
        {folder.name}
      </span>
      <span
        className="text-xs mt-1"
        style={{ color: "var(--outline-black)", opacity: 0.6 }}
      >
        {folder.count} items
      </span>
    </button>
  );
}

// Item row in CRT display
function ItemRow({ item }) {
  const handleClick = () => {
    if (item.type === "link") {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      alert(`Download: ${item.name}\nSize: ${item.size}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-3 px-3 py-2 text-left transition-colors group"
      style={{
        fontFamily: "'VT323', monospace",
        borderBottom: "1px solid #333",
        background: "transparent",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(0,229,255,0.1)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <span className="text-lg">{item.type === "link" ? "🔗" : "💾"}</span>
      <span
        className="flex-1 truncate"
        style={{ color: "var(--phosphor-green)" }}
      >
        {item.name}
      </span>
      <span
        className="text-xs px-2 py-0.5 rounded"
        style={{
          background:
            item.type === "link"
              ? "var(--accent-cyan)"
              : "var(--accent-magenta)",
          color: item.type === "link" ? "var(--outline-black)" : "white",
        }}
      >
        {item.type === "link" ? "OPEN" : item.size}
      </span>
      <span className="text-sm" style={{ color: "#666" }}>
        {item.year}
      </span>
    </button>
  );
}

function Explore() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const currentItems = selectedFolder
    ? folderItems[selectedFolder.id] || []
    : [];

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
            📁 EXPLORE
          </h1>
          <p
            style={{
              color: "var(--sub-heading-color)",
              fontFamily: "'VT323', monospace",
            }}
          >
            {selectedFolder
              ? `Viewing: ${selectedFolder.name}`
              : "Select a folder to browse"}
          </p>
        </div>

        {/* Main content area */}
        <div className="max-w-5xl mx-auto">
          {!selectedFolder ? (
            /* Folder Grid */
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {folders.map((folder) => (
                <FolderCard
                  key={folder.id}
                  folder={folder}
                  onClick={() => setSelectedFolder(folder)}
                />
              ))}
            </div>
          ) : (
            /* CRT Monitor with folder contents */
            <div className="max-w-2xl mx-auto">
              {/* Back button */}
              <button
                onClick={() => setSelectedFolder(null)}
                className="mb-4 px-4 py-2 flex items-center gap-2 action-btn hover-wiggle"
                style={{
                  background: "var(--accent-yellow)",
                  color: "var(--outline-black)",
                  fontFamily: "'SpiderVerse', sans-serif",
                }}
              >
                <span>←</span>
                <span>Back to folders</span>
              </button>

              {/* CRT Monitor */}
              <CRTMonitor
                title={`${selectedFolder.name.toLowerCase()}.exe`}
                variant="atsv"
              >
                <div
                  className="min-h-[400px]"
                  style={{ background: "#0a0a0a" }}
                >
                  {/* Folder header */}
                  <div
                    className="flex items-center gap-3 px-3 py-3"
                    style={{
                      background: "#111",
                      borderBottom: "2px solid var(--accent-cyan)",
                    }}
                  >
                    <span className="text-2xl">{selectedFolder.icon}</span>
                    <div>
                      <div
                        className="font-bold spidey-font"
                        style={{ color: "var(--phosphor-green)" }}
                      >
                        {selectedFolder.name}
                      </div>
                      <div className="text-xs" style={{ color: "#666" }}>
                        {selectedFolder.desc}
                      </div>
                    </div>
                  </div>

                  {/* Item list */}
                  <div className="max-h-[350px] overflow-y-auto">
                    {currentItems.length > 0 ? (
                      currentItems.map((item) => (
                        <ItemRow key={item.id} item={item} />
                      ))
                    ) : (
                      <div
                        className="text-center py-12"
                        style={{ color: "#666" }}
                      >
                        <span className="text-4xl block mb-4">📂</span>
                        <p>No items in this folder yet.</p>
                      </div>
                    )}
                  </div>

                  {/* Status bar */}
                  <div
                    className="flex justify-between items-center px-3 py-1 text-xs"
                    style={{
                      background: "#111",
                      borderTop: "2px solid var(--accent-cyan)",
                      color: "#666",
                    }}
                  >
                    <span>🔗 = Open Link</span>
                    <span>💾 = Download</span>
                    <span>{currentItems.length} items</span>
                  </div>
                </div>
              </CRTMonitor>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="max-w-2xl mx-auto mt-8 text-center text-sm light-panel p-4">
          <p style={{ color: "var(--outline-black)" }}>
            💡 Click a folder icon to browse archived content
          </p>
          <p style={{ color: "var(--outline-black)", opacity: 0.7 }}>
            🔗 Links open in a new tab • 💾 Downloads save to your device
          </p>
        </div>
      </div>
    </main>
  );
}

export default Explore;
