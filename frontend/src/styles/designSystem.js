/**
 * Archivio Design System
 * ======================
 * Comprehensive design tokens for the Museum of Lost Internet
 *
 * Theme: Futuristic sci-fi museum with neon accents, glass morphism,
 * and retro-tech CRT aesthetics
 */

// =============================================================================
// COLOR TOKENS
// =============================================================================

/**
 * Background colors - Dark space theme hierarchy
 * Use for layering UI elements from deep background to surface
 */
export const backgrounds = {
  base: "#0a0e27", // Deepest background (space black-blue)
  elevated: "#0f1433", // Slightly lifted (cards, panels)
  surface: "#151a40", // Interactive surfaces
  overlay: "#1a2050", // Modal/dropdown backgrounds
};

/**
 * Accent colors with state variants
 * Primary: Cyan (tech/digital) | Secondary: Purple (mystery) | Tertiary: Amber (archive/vintage)
 */
export const accents = {
  cyan: {
    DEFAULT: "#00d9ff",
    hover: "#33e1ff",
    active: "#00b8d9",
    muted: "rgba(0, 217, 255, 0.3)",
    glow: "rgba(0, 217, 255, 0.4)",
  },
  purple: {
    DEFAULT: "#a855f7",
    hover: "#b975f9",
    active: "#9333ea",
    muted: "rgba(168, 85, 247, 0.3)",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  amber: {
    DEFAULT: "#f59e0b",
    hover: "#fbbf24",
    active: "#d97706",
    muted: "rgba(245, 158, 11, 0.3)",
    glow: "rgba(245, 158, 11, 0.4)",
  },
};

/**
 * Text colors - Semantic naming for accessibility
 */
export const text = {
  primary: "#ffffff",
  secondary: "#94a3b8", // slate-400
  muted: "#64748b", // slate-500
  inverted: "#0a0e27", // For light backgrounds
  link: "#00d9ff",
  linkHover: "#33e1ff",
};

/**
 * Status/feedback colors
 */
export const status = {
  success: "#22c55e",
  error: "#ef4444",
  warning: "#f59e0b",
  info: "#00d9ff",
};

/**
 * Glass morphism tints
 * Use with backdrop-blur for frosted glass effect
 */
export const glass = {
  light: "rgba(255, 255, 255, 0.03)",
  medium: "rgba(255, 255, 255, 0.05)",
  dark: "rgba(10, 14, 39, 0.7)",
  darker: "rgba(10, 14, 39, 0.9)",
  cyanTint: "rgba(0, 217, 255, 0.05)",
  purpleTint: "rgba(168, 85, 247, 0.1)",
};

/**
 * Border colors for glass panels
 */
export const borders = {
  glass: "rgba(255, 255, 255, 0.1)",
  cyanSubtle: "rgba(0, 217, 255, 0.2)",
  cyanMedium: "rgba(0, 217, 255, 0.3)",
  cyanStrong: "rgba(0, 217, 255, 0.5)",
  purpleSubtle: "rgba(168, 85, 247, 0.2)",
};

// =============================================================================
// TYPOGRAPHY
// =============================================================================

/**
 * Font families
 * - Display: Space Grotesk for headings (futuristic, geometric)
 * - Body: Inter for readability
 * - Mono: JetBrains Mono for code, data, URLs
 */
export const fonts = {
  display: ["Space Grotesk", "sans-serif"],
  body: ["Inter", "sans-serif"],
  mono: ["JetBrains Mono", "monospace"],
};

/**
 * Type scale (rem-based for accessibility)
 */
export const fontSize = {
  xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
  sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
  base: ["1rem", { lineHeight: "1.5rem" }], // 16px
  lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
  xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
  "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
  "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
  "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
  "5xl": ["3rem", { lineHeight: "1.2" }], // 48px
  "6xl": ["3.75rem", { lineHeight: "1.1" }], // 60px
  "7xl": ["4.5rem", { lineHeight: "1.1" }], // 72px
};

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
};

export const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

// =============================================================================
// SPACING
// =============================================================================

/**
 * Consistent spacing scale (4px base unit)
 */
export const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
};

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const borderRadius = {
  none: "0",
  sm: "0.25rem", // 4px
  DEFAULT: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  "2xl": "2rem", // 32px
  full: "9999px",
};

// =============================================================================
// SHADOWS & GLOWS
// =============================================================================

/**
 * Elevation shadows (subtle, for depth)
 */
export const boxShadow = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
  DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.4)",
  md: "0 6px 12px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 20px rgba(0, 0, 0, 0.5)",
  xl: "0 20px 40px rgba(0, 0, 0, 0.6)",

  // Glow effects
  "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.4)",
  "glow-cyan-strong": "0 0 30px rgba(0, 217, 255, 0.6)",
  "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
  "glow-purple-strong": "0 0 30px rgba(168, 85, 247, 0.6)",
  "glow-amber": "0 0 20px rgba(245, 158, 11, 0.4)",

  // Card hover
  "card-hover": "0 8px 32px rgba(0, 217, 255, 0.3)",
};

// =============================================================================
// ANIMATIONS
// =============================================================================

/**
 * Animation durations
 */
export const transitionDuration = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
  slower: "700ms",
};

/**
 * Easing curves
 */
export const transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};

/**
 * Keyframe animations (for Tailwind)
 */
export const keyframes = {
  fadeIn: {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  slideUp: {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  slideDown: {
    "0%": { opacity: "0", transform: "translateY(-20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  shimmer: {
    "0%": { backgroundPosition: "-200% 0" },
    "100%": { backgroundPosition: "200% 0" },
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" },
  },
  glow: {
    "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)" },
    "50%": { boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)" },
  },
  glowCycle: {
    "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)" },
    "33%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" },
    "66%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)" },
  },
  float: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  scanline: {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(100vh)" },
  },
};

/**
 * Animation presets
 */
export const animation = {
  "fade-in": "fadeIn 0.5s ease-out",
  "slide-up": "slideUp 0.5s ease-out",
  "slide-down": "slideDown 0.3s ease-out",
  shimmer: "shimmer 2s infinite linear",
  pulse: "pulse 2s infinite ease-in-out",
  glow: "glow 2s infinite ease-in-out",
  "glow-cycle": "glowCycle 5s infinite ease-in-out",
  float: "float 6s infinite ease-in-out",
  "spin-slow": "spin 3s infinite linear",
  scanline: "scanline 8s infinite linear",
};

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

/**
 * Layering system for proper stacking
 */
export const zIndex = {
  behind: "-1",
  base: "0",
  content: "10",
  header: "50",
  dropdown: "100",
  modal: "200",
  tooltip: "300",
  toast: "400",
};

// =============================================================================
// BREAKPOINTS
// =============================================================================

/**
 * Responsive breakpoints (mobile-first)
 */
export const screens = {
  sm: "640px", // Mobile landscape
  md: "768px", // Tablet
  lg: "1024px", // Desktop
  xl: "1280px", // Wide desktop
  "2xl": "1536px", // Ultra-wide
};

// =============================================================================
// GRADIENTS
// =============================================================================

/**
 * Common gradient presets
 */
export const gradients = {
  cyanPurple: "linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)",
  purpleCyan: "linear-gradient(135deg, #a855f7 0%, #00d9ff 100%)",
  cyanAmber: "linear-gradient(135deg, #00d9ff 0%, #f59e0b 100%)",
  darkFade:
    "linear-gradient(180deg, rgba(10, 14, 39, 0) 0%, rgba(10, 14, 39, 1) 100%)",
  scanline:
    "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
};

// =============================================================================
// EXPORT ALL AS THEME
// =============================================================================

const designSystem = {
  backgrounds,
  accents,
  text,
  status,
  glass,
  borders,
  fonts,
  fontSize,
  fontWeight,
  letterSpacing,
  spacing,
  borderRadius,
  boxShadow,
  transitionDuration,
  transitionTimingFunction,
  keyframes,
  animation,
  zIndex,
  screens,
  gradients,
};

export default designSystem;
