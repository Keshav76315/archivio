/**
 * GlassPanel Component
 * --------------------
 * Reusable glass morphism container with various style variants
 * Based on PROMPTS.md design specifications
 */

import { forwardRef } from "react";

const variants = {
  // Light glass - subtle white tint
  default: "bg-glass-light backdrop-blur-md border border-glass",

  // Dark glass - deeper tint for modals/dropdowns
  dark: "bg-glass-dark backdrop-blur-md border border-cyanSubtle",

  // Darker glass - for overlays and forms
  darker: "bg-glass-darker backdrop-blur-lg border border-cyanSubtle",

  // Cyan tinted glass
  cyan: "bg-glass-cyanTint backdrop-blur-md border border-cyanMedium",

  // Purple tinted glass
  purple: "bg-glass-purpleTint backdrop-blur-md border border-purpleSubtle",
};

const GlassPanel = forwardRef(
  (
    {
      children,
      variant = "default",
      className = "",
      withCornerBrackets = false,
      withScanlines = false,
      as: Component = "div",
      ...props
    },
    ref,
  ) => {
    const baseClasses = variants[variant] || variants.default;
    const cornerClass = withCornerBrackets ? "corner-brackets" : "";
    const scanlineClass = withScanlines ? "scanlines" : "";

    return (
      <Component
        ref={ref}
        className={`${baseClasses} ${cornerClass} ${scanlineClass} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

GlassPanel.displayName = "GlassPanel";

export default GlassPanel;
