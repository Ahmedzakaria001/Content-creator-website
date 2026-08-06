import React from "react";
import { GraduationCap, Building2 } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import { TIMELINE } from "../data/siteData";

import aboutImg from "../assets/images/about-quote.jpg";

export default function About() {
  return (
    <div>
      <section className="container py-5 my-4">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-5">
            <Eyebrow>About</Eyebrow>
            <h1 className="font-serif display-5 fw-medium text-dark mb-4">
              From the call center floor to coaching the next person on it.
            </h1>
            <div className="rounded-4 overflow-hidden border border-secondary-subtle p-2 shadow-sm bg-white">
              <img 
                src={aboutImg} 
                alt="Ahmed Moussa Quote & Philosophy" 
                className="img-fluid rounded-3 w-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7 text-secondary leading-relaxed">
            <p className="mb-3">
              Ahmed Moussa is a bilingual, Dubai-based content creator and Customer Happiness Executive at Prime Health Group. Over 4+ years across three multinational customer service companies — Sutherland, Teleperformance, and Concentrix — plus close to two years inside UAE healthcare, he has sat on both sides of the interview table: as the candidate trying to clear the round, and as the professional who understands exactly what that round is testing for.
            </p>
            <p className="mb-3">
              That combination, paired with a BSc in Psychology and 390+ hours of clinical psychology training, shapes how he coaches: not generic interview tips, but an understanding of nerves, communication patterns, and what a HR panel is actually listening for.
            </p>
            <p className="mb-0">
              Every week, he turns that experience into free video content for job seekers chasing BPO and customer service roles — now reaching 32,000+ people across YouTube, TikTok, and Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="bg-white border-top border-bottom border-secondary-subtle py-5">
        <div className="container py-3">
          <SectionHeading eyebrow="Experience" title="Where the playbook comes from." />
          <div className="row g-4 mt-4">
            {TIMELINE.map((t, i) => (
              <div key={t.org} className="col-12 col-sm-6 col-lg-3">
                <div className="ps-3 border-start border-3 border-warning">
                  <span className="font-mono text-warning small">{String(i + 1).padStart(2, "0")}</span>
                  <div className="fw-medium text-dark mt-1">{t.org}</div>
                  <div className="text-teal small" style={{ color: "#123A3E" }}>{t.role}</div>
                  <p className="text-muted small mt-2">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & GROUNDING */}
      <section className="container py-5 my-4">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 border border-secondary-subtle rounded-4 p-4" style={{ backgroundColor: "#F7F8F6" }}>
              <div className="card-body">
                <GraduationCap size={24} className="mb-3 text-warning" style={{ color: "#B9822A" }} />
                <h5 className="card-title text-dark fw-medium">Education & Training</h5>
                <p className="card-text text-muted small mt-2">
                  BSc in Psychology, with 390+ hours of clinical psychology training — the foundation for reading nerves, communication habits, and coaching people through high-pressure interviews.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card h-100 border border-secondary-subtle rounded-4 p-4" style={{ backgroundColor: "#F7F8F6" }}>
              <div className="card-body">
                <Building2 size={24} className="mb-3 text-warning" style={{ color: "#B9822A" }} />
                <h5 className="card-title text-dark fw-medium">Industry Grounding</h5>
                <p className="card-text text-muted small mt-2">
                  4+ years of multinational customer service experience across Sutherland, Teleperformance, and Concentrix, plus ~1.5 years in UAE healthcare customer happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}