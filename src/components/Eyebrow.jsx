import React from "react";

export default function Eyebrow({ children }) {
  return (
    <div className="font-mono text-uppercase text-warning fw-medium mb-2" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#B9822A" }}>
      {children}
    </div>
  );
}