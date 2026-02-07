/**
 * Explore Page - Retro Web Style
 * -------------------------------
 * Folder-based navigation with CRT monitor display
 * Flow: Folders -> CRT viewer with items -> Open link / Download
 */

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import CRTMonitor from "../components/Retro/CRTMonitor";

// Sample folder data (will be replaced with API data)
const folders = [
  {
    id: "geocities",
    name: "GeoCities",
    icon: "🌐",
    color: "#00ffcc",
    desc: "Personal homepages from the 90s",
    count: 847,
  },
  {
    id: "flash",
    name: "Flash Games",
    icon: "🎮",
    color: "#ff00aa",
    desc: "Classic Flash games & animations",
    count: 312,
  },
  {
    id: "myspace",
    name: "MySpace",
    icon: "👤",
    color: "#ffff00",
    desc: "Social profiles & music pages",
    count: 523,
  },
  {
    id: "forums",
    name: "Forums & BBS",
    icon: "💬",
    color: "#00ff00",
    desc: "Discussion boards & communities",
    count: 189,
  },
  {
    id: "early-blogs",
    name: "Early Blogs",
    icon: "📝",
    color: "#ff6600",
    desc: "LiveJournal, Blogspot originals",
    count: 276,
  },
  {
    id: "misc",
    name: "Miscellaneous",
    icon: "📦",
    color: "#cc00ff",
    desc: "Uncategorized web artifacts",
    count: 134,
  },
];

// Sample items for folders (mock data)
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

// Retro folder icon component
function FolderIcon({ folder, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`
        group flex flex-col items-center p-4 rounded transition-all
        ${isSelected ? "bg-blue-900/50" : "hover:bg-white/5"}
      `}
    >
      {/* Folder graphic */}
      <div
        className="relative w-24 h-20 mb-2 transition-transform group-hover:scale-110"
        style={{
          filter: `drop-shadow(0 0 10px ${folder.color}40)`,
        }}
      >
        {/* Folder back */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 rounded-b"
          style={{
            background: folder.color,
            border: `3px solid ${folder.color}`,
            boxShadow: `inset -2px -2px 0 rgba(0,0,0,0.3)`,
          }}
        />
        {/* Folder tab */}
        <div
          className="absolute top-2 left-0 w-10 h-4 rounded-t"
          style={{
            background: folder.color,
            borderTop: `3px solid ${folder.color}`,
            borderLeft: `3px solid ${folder.color}`,
            borderRight: `3px solid ${folder.color}`,
          }}
        />
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-3xl pt-4">
          {folder.icon}
        </div>
      </div>

      {/* Label */}
      <span
        className="text-center text-sm font-bold text-white group-hover:text-cyan-400 transition-colors"
        style={{ fontFamily: "'VT323', monospace" }}
      >
        {folder.name}
      </span>
      <span className="text-xs text-gray-500">{folder.count} items</span>
    </button>
  );
}

// Item row in CRT display
function ItemRow({ item, index }) {
  const handleClick = () => {
    if (item.type === "link") {
      window.open(item.url, "_blank");
    } else {
      // Download functionality - would connect to backend
      alert(`Download: ${item.name}\nSize: ${item.size}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-blue-800 transition-colors group"
      style={{
        fontFamily: "'VT323', monospace",
        borderBottom: "1px solid #333",
      }}
    >
      {/* Icon */}
      <span className="text-lg">{item.type === "link" ? "🔗" : "💾"}</span>

      {/* Name */}
      <span className="flex-1 text-cyan-400 group-hover:text-white truncate">
        {item.name}
      </span>

      {/* Type badge */}
      <span
        className={`text-xs px-2 py-0.5 rounded ${
          item.type === "link"
            ? "bg-green-900 text-green-400"
            : "bg-purple-900 text-purple-400"
        }`}
      >
        {item.type === "link" ? "OPEN" : item.size}
      </span>

      {/* Year */}
      <span className="text-gray-500 text-sm">{item.year}</span>
    </button>
  );
}

function Explore() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [frameVariant, setFrameVariant] = useState("smooth");

  const currentItems = selectedFolder
    ? folderItems[selectedFolder.id] || []
    : [];

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "#1a0a2e",
        fontFamily: "'VT323', 'Courier New', monospace",
      }}
    >
      {/* Starfield background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
            fade
            speed={0.5}
          />
        </Canvas>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%2300ffcc' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 pt-8 px-4 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-6xl font-bold mb-2"
            style={{
              color: "#00ffcc",
              textShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc",
              fontFamily: "'Press Start 2P', monospace",
            }}
          >
            📁 EXPLORE
          </h1>
          <p style={{ color: "#ff00aa" }}>
            {selectedFolder
              ? `Viewing: ${selectedFolder.name}`
              : "Select a folder to browse"}
          </p>
        </div>

        {/* Main content area */}
        <div className="max-w-6xl mx-auto">
          {!selectedFolder ? (
            /* Folder Grid */
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {folders.map((folder) => (
                <FolderIcon
                  key={folder.id}
                  folder={folder}
                  onClick={() => setSelectedFolder(folder)}
                  isSelected={false}
                />
              ))}
            </div>
          ) : (
            /* CRT Monitor with folder contents */
            <div className="max-w-2xl mx-auto">
              {/* Back button */}
              <button
                onClick={() => setSelectedFolder(null)}
                className="mb-4 px-4 py-2 text-cyan-400 hover:text-white transition-colors flex items-center gap-2"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                <span>←</span>
                <span>Back to folders</span>
              </button>

              {/* CRT Monitor with content */}
              <CRTMonitor
                title={`${selectedFolder.name.toLowerCase()}.exe`}
                variant={frameVariant}
                showSwitcher={true}
                onVariantChange={setFrameVariant}
              >
                <div
                  className="min-h-[400px]"
                  style={{ background: "#0a0a0a" }}
                >
                  {/* Folder header */}
                  <div
                    className="flex items-center gap-3 px-3 py-2"
                    style={{
                      background: "#1a1a2a",
                      borderBottom: "2px solid #333",
                    }}
                  >
                    <span className="text-2xl">{selectedFolder.icon}</span>
                    <div>
                      <div className="text-white font-bold">
                        {selectedFolder.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {selectedFolder.desc}
                      </div>
                    </div>
                  </div>

                  {/* Item list */}
                  <div className="max-h-[350px] overflow-y-auto">
                    {currentItems.length > 0 ? (
                      currentItems.map((item, idx) => (
                        <ItemRow key={item.id} item={item} index={idx} />
                      ))
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <span className="text-4xl block mb-4">📂</span>
                        <p>No items in this folder yet.</p>
                        <p className="text-sm mt-2">
                          Connect backend to load content.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Status bar */}
                  <div
                    className="flex justify-between items-center px-3 py-1 text-xs text-gray-500"
                    style={{
                      background: "#1a1a2a",
                      borderTop: "2px solid #333",
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
        <div className="max-w-2xl mx-auto mt-8 text-center text-sm text-gray-500">
          <p>💡 Click a folder icon to browse archived content</p>
          <p>🔗 Links open in a new tab • 💾 Downloads save to your device</p>
        </div>
      </div>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
      `}</style>
    </div>
  );
}

export default Explore;
