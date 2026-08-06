import React, { useState, useEffect } from "react";

export default function ScoreBar({ label, value, delay }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0);
    const t = setTimeout(() => setWidth(value), 120 + delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between font-mono text-muted mb-1" style={{ fontSize: "11px" }}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="progress" style={{ height: "6px", backgroundColor: "#DCE3DE" }}>
        <div
          className="progress-bar rounded-pill"
          role="progressbar"
          style={{
            width: `${width}%`,
            backgroundColor: "#D9A441",
            transition: "width 0.7s ease-out",
          }}
          aria-valuenow={width}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}