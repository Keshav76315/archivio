/**
 * Layout Component - ATSV Style
 * ------------------------------
 * Conditionally shows navbar (hidden on Home page)
 * Uses cream background for consistent aesthetic
 */

import { Outlet, useLocation } from "react-router-dom";
import RetroNavbar from "../Retro/RetroNavbar";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--bg-cream)",
      }}
    >
      {/* Show navbar on all pages except Home */}
      {!isHomePage && <RetroNavbar />}

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
