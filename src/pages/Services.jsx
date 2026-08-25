import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowUpRight, AlertTriangle, Clock, Globe, CreditCard, Download, FileText, Sparkles } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import { SERVICES_DATA } from "../data/siteData";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO BANNER WITH OVERLAY & CONTENT */}
      <div className="container pt-4">
        <div 
          className="position-relative rounded-4 overflow-hidden border border-secondary-subtle shadow-lg"
          style={{ minHeight: "360px", backgroundColor: "#123A3E" }}
        >
          <div 
            className="position-absolute top-0 start-0 w-100 h-100" 
            style={{ 
              background: "linear-gradient(180deg, rgba(18, 58, 62, 0.4) 0%, rgba(18, 58, 62, 0.95) 100%)" 
            }}
          />

          <div className="position-relative z-1 p-4 p-md-5 d-flex flex-column justify-content-end h-100" style={{ minHeight: "360px" }}>
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-serif display-5 fw-medium mb-3" style={{ maxWidth: "650px", color: "#e2e8f0" }}>
              Structured coaching for every stage of getting hired.
            </h1>
            <p className="lead fs-6 mb-0" style={{ maxWidth: "550px", color: "#94a3b8" }}>
              Pricing is tailored to the scope of each engagement — reach out and we'll figure out the right fit together.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES LIST SECTION */}
      <div className="container py-5">
        
        {/* 📌 الخانة الأولى: تفاصيل الأسعار والسياسات */}
        <div 
          className="card rounded-4 p-4 p-md-5 border-0 shadow-sm mb-4"
          style={{ backgroundColor: "#111827" }}
        >
          <div className="row g-4">
            <div className="col-12 text-center text-md-start">
              <span 
                className="badge font-mono text-uppercase px-3 py-2 rounded-pill mb-2 fw-semibold"
                style={{ 
                  backgroundColor: "rgba(245, 158, 11, 0.15)", 
                  color: "#fbbf24", 
                  border: "1px solid rgba(245, 158, 11, 0.3)" 
                }}
              >
                Session Rates & Terms
              </span>

              <h3 className="font-serif fs-2 fw-bold mb-1" style={{ color: "#f3f4f6" }}>
                Pricing & Booking Policy
              </h3>
              <p className="small mb-0" style={{ color: "#9ca3af" }}>
                Transparent rates for both domestic and international applicants.
              </p>
            </div>

            {/* Local Rate (Egypt) */}
            <div className="col-md-6 col-lg-4">
              <div 
                className="p-4 rounded-4 h-100" 
                style={{ backgroundColor: "#1f2937", border: "1px solid #374151" }}
              >
                <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#60a5fa" }}>
                  <CreditCard size={20} />
                  <h5 className="mb-0 fw-bold" style={{ color: "#e5e7eb" }}>Local Rate (Egypt)</h5>
                </div>
                <div className="d-flex align-items-baseline gap-2 mt-3">
                  <span className="fs-3 fw-bold" style={{ color: "#38bdf8" }}>100 EGP</span>
                  <span className="text-decoration-line-through small" style={{ color: "#6b7280" }}>200 EGP</span>
                </div>
                <p className="small mt-2 mb-0 d-flex align-items-center gap-1" style={{ color: "#9ca3af" }}>
                  <Clock size={14} /> Duration: 1 Hour (Limited-time Discount)
                </p>
              </div>
            </div>

            {/* International Rate */}
            <div className="col-md-6 col-lg-4">
              <div 
                className="p-4 rounded-4 h-100" 
                style={{ backgroundColor: "#1f2937", border: "1px solid #374151" }}
              >
                <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#60a5fa" }}>
                  <Globe size={20} />
                  <h5 className="mb-0 fw-bold" style={{ color: "#e5e7eb" }}>International Rates</h5>
                </div>
                <div className="mt-3">
                  <div className="fs-4 fw-bold" style={{ color: "#f3f4f6" }}>100 AED / $50 USD</div>
                  <p className="small mt-1 mb-0" style={{ color: "#9ca3af" }}>
                    Per hour rate (after discount) for clients residing outside Egypt.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Notice */}
            <div className="col-12 col-lg-4">
              <div 
                className="p-4 rounded-4 h-100" 
                style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)" }}
              >
                <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#f87171" }}>
                  <AlertTriangle size={20} />
                  <h5 className="mb-0 fw-bold" style={{ color: "#f87171" }}>Important Notice</h5>
                </div>
                <ul className="small mb-0 ps-3 mt-3" style={{ color: "#fca5a5" }}>
                  <li className="mb-2"><strong>Payment is strictly non-refundable.</strong></li>
                  <li>Please double-check your availability and confirm all details before submitting a booking request.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 📌 الخانة الثانية: قسم أدلة الـ PDF المجانية المستقلة */}
        <div 
          className="card rounded-4 p-4 p-md-5 border-0 shadow-sm mb-5"
          style={{ backgroundColor: "#0f172a" }}
        >
          <div className="row g-4 align-items-center">
            <div className="col-12 text-center text-md-start mb-2">
              <span 
                className="badge font-mono text-uppercase px-3 py-2 rounded-pill mb-2 fw-semibold"
                style={{ 
                  backgroundColor: "rgba(56, 189, 248, 0.15)", 
                  color: "#38bdf8", 
                  border: "1px solid rgba(56, 189, 248, 0.3)" 
                }}
              >
                <Sparkles size={14} className="me-1 d-inline" /> Free Career Guides
              </span>
              <h3 className="font-serif fs-2 fw-bold mb-1" style={{ color: "#f8fafc" }}>
                Downloadable PDF Resources
              </h3>
              <p className="small mb-0" style={{ color: "#94a3b8" }}>
                Get instant access to practical interview models and sales frameworks.
              </p>
            </div>

            {/* Guide 1: Interview Guide */}
            <div className="col-md-6">
              <div 
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
              >
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3" style={{ color: "#38bdf8" }}>
                    <FileText size={22} />
                    <h5 className="mb-0 fw-bold" style={{ color: "#f1f5f9" }}>Interview Preparation Guide</h5>
                  </div>
                  <p className="small mb-3" style={{ color: "#cbd5e1" }}>
                    Master top 10 interview questions, model answers, the STAR method, and key professional terminology.
                  </p>
                </div>
                <a 
                  href="/pdfs/Interview_Guide_Ahmed_Moussa.pdf" 
                  download="Interview_Guide_Ahmed_Moussa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info rounded-pill px-4 py-2 small fw-medium d-inline-flex align-items-center gap-2 me-auto mt-2"
                >
                  <Download size={16} /> Download Interview Guide (PDF)
                </a>
              </div>
            </div>

            {/* Guide 2: Sales Guide */}
            <div className="col-md-6">
              <div 
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
              >
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3" style={{ color: "#38bdf8" }}>
                    <FileText size={22} />
                    <h5 className="mb-0 fw-bold" style={{ color: "#f1f5f9" }}>B2C Sales Guide for Beginners</h5>
                  </div>
                  <p className="small mb-3" style={{ color: "#cbd5e1" }}>
                    Core principles, cold calling scripts, handling customer objections, and actionable daily sales habits.
                  </p>
                </div>
                <a 
                  href="/pdfs/B2C_Sales_Guide_Ahmed_Moussa-1.pdf" 
                  download="B2C_Sales_Guide_Ahmed_Moussa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info rounded-pill px-4 py-2 small fw-medium d-inline-flex align-items-center gap-2 me-auto mt-2"
                >
                  <Download size={16} /> Download Sales Guide (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 📌 كروت الخدمات (مع تحسين محاذاة الأيقونات مع أول سطر) */}
        <div className="row g-4">
          {SERVICES_DATA.map((s) => (
            <div key={s.title} className="col-12">
              <div 
                className="card rounded-4 p-4 border border-secondary-subtle"
                style={{ backgroundColor: "#111827" }}
              >
                <div className="card-body p-0">
                  <div className="row g-4 align-items-center">
                    <div className="col-auto">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "48px", height: "48px", backgroundColor: "#1f2937", color: "#38bdf8" }}
                      >
                        <s.icon size={22} />
                      </div>
                    </div>

                    <div className="col">
                      {s.tag && (
                        <span className="font-mono text-uppercase small fw-semibold" style={{ color: "#fbbf24" }}>
                          {s.tag}
                        </span>
                      )}
                      <h3 className="font-serif fs-3 fw-medium mt-1 mb-2" style={{ color: "#f8fafc" }}>
                        {s.title}
                      </h3>
                      
                      <p className="small mb-3" style={{ color: "#94a3b8" }}>
                        {s.desc}
                      </p>

                      <ul className="list-unstyled mb-0">
                        {s.points.map((p) => (
                          <li key={p} className="d-flex align-items-start gap-2 small mb-2">
                            <CheckCircle2 size={16} className="mt-1 flex-shrink-0" style={{ color: "#38bdf8" }} />
                            <span style={{ color: "#cbd5e1" }}>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-12 col-md-auto text-center d-flex align-items-center justify-content-center">
                      <button
                        onClick={() => navigate("/contact")}
                        className="btn btn-custom-primary rounded-pill px-4 py-2 small fw-medium d-inline-flex align-items-center justify-content-center gap-2"
                      >
                        Enquire <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}