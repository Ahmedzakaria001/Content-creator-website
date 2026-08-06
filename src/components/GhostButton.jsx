import React from "react";

export default function GhostButton({ children, onClick, href }) {
  if (href) {
    return (
      <a href={href} onClick={onClick} className="btn btn-custom-ghost d-inline-flex align-items-center gap-2">
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="btn btn-custom-ghost d-inline-flex align-items-center gap-2">
      {children}
    </button>
  );
}