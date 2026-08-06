import React from "react";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div style={{ maxWidth: "650px" }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-serif display-6 fw-medium text-dark leading-tight">{title}</h2>
      {sub && <p className="mt-3 text-secondary lead" style={{ fontSize: "1rem" }}>{sub}</p>}
    </div>
  );
}