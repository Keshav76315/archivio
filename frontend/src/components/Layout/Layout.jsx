/**
 * Layout Component - Retro Web Style
 * -----------------------------------
 * Uses RetroNavbar for unified navigation across all pages
 */

import { Outlet } from "react-router-dom";
import RetroNavbar from "../Retro/RetroNavbar";

function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#1a0a2e",
      }}
    >
      {/* Unified Retro Navigation */}
      <RetroNavbar />

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
