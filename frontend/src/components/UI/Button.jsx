/**
 * Button Component
 * ----------------
 * Futuristic button styles with glow effects
 */

import { forwardRef } from "react";

const variants = {
  // Primary - gradient cyan background
  primary: `
    px-6 py-3 rounded-lg font-semibold
    bg-gradient-to-r from-cyan-DEFAULT to-cyan-active
    text-bg-base
    transition-all duration-300
    hover:shadow-glow-cyan hover:-translate-y-0.5
    active:scale-95
  `,

  // Outline - bordered with glow on hover
  outline: `
    px-6 py-3 rounded-lg font-semibold
    bg-transparent
    border-2 border-cyan-DEFAULT
    text-cyan-DEFAULT
    transition-all duration-300
    hover:bg-cyan-DEFAULT/10 hover:shadow-glow-cyan
    active:scale-95
  `,

  // Ghost - minimal style
  ghost: `
    px-6 py-3 rounded-lg font-medium
    bg-transparent border-none
    text-text-secondary
    transition-all duration-300
    hover:bg-white/5 hover:text-white
    active:scale-95
  `,

  // Icon - circular icon button
  icon: `
    p-3 rounded-full
    bg-glass-light backdrop-blur-sm
    border border-cyanSubtle
    text-text-secondary
    transition-all duration-300
    hover:bg-cyan-DEFAULT/10 hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT
    active:scale-95
  `,
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const baseClasses = variants[variant] || variants.primary;
    const sizeClasses = variant !== "icon" ? sizes[size] : "";

    return (
      <button
        ref={ref}
        className={`
        ${baseClasses}
        ${sizeClasses}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `
          .trim()
          .replace(/\s+/g, " ")}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
