import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { SCORECARD_SAMPLES } from "../data/siteData";
import ScoreBar from "./ScoreBar";

export default function InterviewScorecard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SCORECARD_SAMPLES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const sample = SCORECARD_SAMPLES[index];

  return (
    <div className="position-relative w-100" style={{ maxWidth: "380px" }}>
      <div
        className="position-absolute w-100 h-100 rounded-4 border border-secondary"
        style={{ top: "-10px", left: "-10px", right: "-10px", bottom: "-10px", zIndex: 0, opacity: 0.3 }}
      />
      <div className="position-relative bg-white rounded-4 scorecard-shadow p-4" style={{ zIndex: 1 }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="font-mono text-uppercase fw-medium" style={{ fontSize: "11px", color: "#B9822A" }}>
            {sample.round}
          </span>
          <span className="d-flex align-items-center gap-1 font-mono text-success" style={{ fontSize: "11px" }}>
            <CheckCircle2 size={13} /> LIVE FEEDBACK
          </span>
        </div>
        <p className="font-serif fs-5 fst-italic text-dark mb-4">{sample.question}</p>
        
        {sample.scores.map((s, i) => (
          <ScoreBar key={s.label} label={s.label} value={s.value} delay={i * 120} />
        ))}

        <div className="mt-4 pt-3 border-top d-flex align-items-center justify-content-between">
          <span className="fw-medium text-dark small">{sample.verdict}</span>
          <div className="d-flex gap-1">
            {SCORECARD_SAMPLES.map((_, i) => (
              <span
                key={i}
                className="rounded-pill transition-all"
                style={{
                  height: "6px",
                  width: i === index ? "16px" : "6px",
                  backgroundColor: i === index ? "#D9A441" : "#DCE3DE",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}