import React from "react";

export function Badge({ children, variant = "default" }) {
  const baseStyle = "inline-block px-2 py-1 text-xs font-semibold rounded-full";
  const variants = {
    default: "bg-gray-600 text-white",
    secondary: "bg-blue-600 text-white",
    success: "bg-green-600 text-white",
    danger: "bg-red-600 text-white",
  };

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.default}`}>
      {children}
    </span>
  );
}
