import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowUpRight, Download, FileText, Sparkles, ExternalLink } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import { SERVICES_DATA } from "../data/siteData";

// قائمة ملفات الـ PDF السبعة
const PDF_RESOURCES = [
 {
    id: 1,
    title: "Interview Preparation Guide",
    desc: "Master top 10 questions, model answers, and the STAR method.",
    file: "/pdfs/Interview_Guide_Ahmed_Moussa.pdf",
  },
  {
    id: 2,
    title: "Call Center English Vocabulary",
    desc: "Essential vocabulary for professional communication in English calls.",
    file: "/pdfs/Call_Center_English_Vocabulary_Ahmed_Moussa-1.pdf",
  },
  {
    id: 3,
    title: "Telecom Call Flow Role Play",
    desc: "Real-world role play scenarios and practical call flow strategies.",
    file: "/pdfs/Telecom_Call_Flow_Role_Play_Ahmed_Moussa.pdf",
  },
  {
    id: 4,
    title: "25 Empathy Sentences",
    desc: "Essential customer service empathy phrases and responses.",
    file: "/pdfs/25_Empathy_Sentences_Ahmed_Moussa.pdf",
  },
  {
    id: 5,
    title: "The Psychology of Winning Calls",
    desc: "Psychological tactics and customer mindset control in phone support.",
    file: "/pdfs/The_Psychology_of_Winning_Calls_v2_Ahmed_Moussa.pdf",
  },
  {
    id: 6,
    title: "BPO Abbreviations Handbook",
    desc: "Key terminology and acronyms used in multinational call centers.",
    file: "/pdfs/BPO_Abbreviations_Handbook_Ahmed_Moussa.pdf",
  },
  {
    id: 7,
    title: "B2C Sales Guide for Beginners",
    desc: "Core principles, cold calling scripts, and handling objections.",
    file: "/pdfs/B2C_Sales_Guide_Ahmed_Moussa-1.pdf",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO BANNER WITH OVERLAY & CONTENT */}
      <div className="container pt-4">
        <div 
          className="position-relative rounded-4 overflow-hidden border border-secondary-subtle shadow-lg"
          style={{ minHeight: "220px", backgroundColor: "#123A3E" }}
        >
          <div 
            className="position-absolute top-0 start-0 w-100 h-100" 
            style={{ 
              background: "linear-gradient(180deg, rgba(18, 58, 62, 0.4) 0%, rgba(18, 58, 62, 0.95) 100%)" 
            }}
          />

          <div className="position-relative z-1 p-4 p-md-4 d-flex flex-column justify-content-center">
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-serif display-6 fw-medium mb-2 mt-1" style={{ maxWidth: "650px", color: "#e2e8f0" }}>
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
        
        {/* 📌 قسم أدلة الـ PDF المجانية (7 ملفات) */}
        <div 
          className="card rounded-4 p-4 p-md-5 border-0 shadow-sm mb-5"
          style={{ backgroundColor: "#0f172a" }}
        >
          <div className="row g-4 align-items-center mb-2">
            <div className="col-12 text-center text-md-start">
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
                Get instant access to practical interview models, call center vocabulary, and sales frameworks.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {PDF_RESOURCES.map((pdf) => (
              <div key={pdf.id} className="col-12 col-md-6 col-lg-4">
                <div 
                  className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                  style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                >
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#38bdf8" }}>
                      <FileText size={20} className="flex-shrink-0" />
                      <h5 className="mb-0 fw-bold fs-6" style={{ color: "#f1f5f9" }}>{pdf.title}</h5>
                    </div>
                    <p className="small mb-3" style={{ color: "#cbd5e1" }}>
                      {pdf.desc}
                    </p>
                  </div>

                  <div className="d-flex gap-2 pt-2 mt-auto">
                    <a 
                      href={pdf.file} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-info rounded-pill px-3 py-1-5 small fw-medium d-inline-flex align-items-center gap-1"
                    >
                      View <ExternalLink size={13} />
                    </a>
                    <a 
                      href={pdf.file} 
                      download
                      className="btn btn-sm btn-info text-dark rounded-pill px-3 py-1-5 small fw-semibold d-inline-flex align-items-center gap-1"
                    >
                      Download <Download size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📌 كروت الخدمات */}
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