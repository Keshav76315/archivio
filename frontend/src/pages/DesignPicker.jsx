/**
 * Design Picker
 * -------------
 * Allows switching between the 3 homepage design options
 */

import { useState } from "react";
import HomeRetro from "./HomeRetro";
import HomeBrutalist from "./HomeBrutalist";
import HomeVaporwave from "./HomeVaporwave";

const designs = [
  { id: "retro", name: "A) Retro Web", emoji: "🕹️", component: HomeRetro },
  {
    id: "brutalist",
    name: "B) Brutalist",
    emoji: "🏗️",
    component: HomeBrutalist,
  },
  {
    id: "vaporwave",
    name: "C) Vaporwave",
    emoji: "🌴",
    component: HomeVaporwave,
  },
];

function DesignPicker() {
  const [activeDesign, setActiveDesign] = useState("retro");

  const ActiveComponent =
    designs.find((d) => d.id === activeDesign)?.component || HomeRetro;

  return (
    <div className="relative">
      {/* Floating switcher */}
      <div
        className="fixed top-24 right-4 z-50 p-4 rounded-xl shadow-2xl"
        style={{
          background: "rgba(0,0,0,0.9)",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      >
        <p className="text-white text-sm font-bold mb-3 text-center">
          Choose Design:
        </p>
        <div className="flex flex-col gap-2">
          {designs.map((design) => (
            <button
              key={design.id}
              onClick={() => setActiveDesign(design.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  activeDesign === design.id
                    ? "bg-cyan-500 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }
              `}
            >
              {design.emoji} {design.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active design */}
      <ActiveComponent />
    </div>
  );
}

export default DesignPicker;
