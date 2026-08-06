import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import { SERVICES_DATA } from "../data/siteData";

import servicesImg from "../assets/images/services-desk.jpg";

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

          {/* Banner Text & Details */}
          <div className="position-relative z-1 p-4 p-md-5 d-flex flex-column justify-content-end h-100 text-white" style={{ minHeight: "360px" }}>
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-serif display-5 fw-medium text-white mb-3" style={{ maxWidth: "650px" }}>
              Structured coaching for every stage of getting hired.
            </h1>
            <p className="text-light-50 lead fs-6 mb-0" style={{ maxWidth: "550px", opacity: 0.9 }}>
              Pricing is tailored to the scope of each engagement — reach out and we'll figure out the right fit together.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES LIST SECTION */}
      <div className="container py-5">
        <div className="row g-4">
          {SERVICES_DATA.map((s) => (
            <div key={s.title} className="col-12">
              <div
                className={`card rounded-4 p-4 border ${
                  s.flagship ? "text-light border-0" : "bg-white border-secondary-subtle"
                }`}
                style={{ backgroundColor: s.flagship ? "#123A3E" : undefined }}
              >
                <div className="card-body">
                  <div className="row g-4 align-items-start">
                    <div className="col-auto">
                      <div
                        className={`rounded-circle d-flex align-items-center justify-content-center ${
                          s.flagship ? "bg-warning text-dark" : "bg-light text-teal"
                        }`}
                        style={{ width: "48px", height: "48px", color: s.flagship ? undefined : "#123A3E" }}
                      >
                        <s.icon size={22} />
                      </div>
                    </div>

                    <div className="col">
                      {s.tag && <span className="font-mono text-uppercase text-warning small">{s.tag}</span>}
                      <h3 className="font-serif fs-3 fw-medium mt-1 mb-2">{s.title}</h3>
                      <p className={`small mb-3 ${s.flagship ? "text-light-50" : "text-muted"}`}>{s.desc}</p>
                      <ul className="list-unstyled mb-0">
                        {s.points.map((p) => (
                          <li key={p} className="d-flex align-items-center gap-2 small mb-2">
                            <CheckCircle2 size={16} className={s.flagship ? "text-warning" : "text-success"} />
                            <span className={s.flagship ? "text-light" : "text-dark"}>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-12 col-md-auto text-md-end d-flex flex-md-column justify-content-between align-items-center align-items-md-end gap-3 h-100">
                      <span className={`font-mono text-uppercase small ${s.flagship ? "text-light-50" : "text-muted"}`}>
                        Contact for pricing
                      </span>
                      <button
                        onClick={() => navigate("/contact")}
                        className={`btn rounded-pill px-4 py-2 small fw-medium d-inline-flex align-items-center gap-2 ${
                          s.flagship ? "btn-warning text-dark" : "btn-custom-primary"
                        }`}
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