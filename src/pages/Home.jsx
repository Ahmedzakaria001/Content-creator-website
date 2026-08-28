import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Mic, FileText, Briefcase, Users } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Badge from "../components/Badge";
import PrimaryButton from "../components/PrimaryButton";
import GhostButton from "../components/GhostButton";
import SectionHeading from "../components/SectionHeading";
import InterviewScorecard from "../components/InterviewScorecard";
import { YoutubeIcon } from "../data/siteData";
import heroImg from "../assets/images/hero-banner.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO BANNER - FULL WIDTH WITH SUBTLE RADIUS */}
      <div className="container-fluid container-md pt-2 pt-md-4 px-2 px-md-3">
        <div
          className="rounded-4 rounded-md-4 overflow-hidden border-0 border-md border-secondary-subtle shadow-sm p-0"
          style={{ backgroundColor: "#090a0f" }}
        >
          <img
            src={heroImg}
            alt="Ahmed Moussa Hero Banner"
            className="w-100 d-block rounded-3 rounded-md-4"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />
        </div>
      </div>

      {/* HERO CONTENT SECTION */}
      <section className="container py-5 my-md-2">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <Eyebrow>Interview Coach · Content Creator </Eyebrow>
            <h1 className="font-serif display-4 fw-medium text-dark mb-3">
              Land the offer.<br />Not just the interview.
            </h1>
            <p className="text-secondary lead fs-6 mb-4" style={{ maxWidth: "540px" }}>
              I help job seekers clear BPO and customer service interviews — HR rounds, operational rounds, and Versant/English assessments — using real playbooks from inside Sutherland, Teleperformance, and Concentrix.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <PrimaryButton onClick={() => navigate("/contact")}>
                Book an interview coach session <ArrowUpRight size={16} />
              </PrimaryButton>
              <GhostButton href="https://www.youtube.com/@Ahmed.Moussa206">
                Watch free content <YoutubeIcon style={{ fontSize: "16px" }} />
              </GhostButton>
            </div>
            <div>
              <Badge>Sutherland</Badge>
              <Badge>Teleperformance</Badge>
              <Badge>Concentrix</Badge>
              <Badge>Prime Health Group</Badge>
            </div>
          </div>

          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <InterviewScorecard />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white border-top border-bottom border-secondary-subtle py-4">
        <div className="container">
          <div className="row g-4 text-center text-sm-start">
            {[
              ["41,000+", "Followers across YouTube, TikTok , Instagram & Lindkedin"],
              ["4+ yrs", "Multinational customer service experience"],
              ["1.5 yrs", "UAE healthcare customer happiness"],
              ["390+ hrs", "Clinical psychology training"],
            ].map(([num, label]) => (
              <div key={label} className="col-6 col-sm-3">
                <div className="font-serif fs-2 fw-medium text-teal" style={{ color: "#123A3E" }}>
                  {num}
                </div>
                <div className="text-muted small mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="container py-5 my-4">
        <SectionHeading
          eyebrow="What I cover, weekly"
          title="Content built from the call center floor, not theory."
          sub="Every video comes from real HR panels, real operational rounds, and real assessment scores — translated into a repeatable playbook."
        />
        <div className="row g-4 mt-4">
          {[
            [Mic, "BPO Interview Prep", "Clearing HR and operational rounds with confidence."],
            [FileText, "Language Assessments", "Versant and English test strategies that move your score."],
            [Briefcase, "Career Growth", "Progressing inside corporate customer care."],
            [Users, "Real-World Insight", "Lessons from Sutherland, Teleperformance & Concentrix."],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border border-secondary-subtle rounded-4 p-3 bg-white">
                <div className="card-body">
                  <Icon size={24} className="mb-3" style={{ color: "#B9822A" }} />
                  <h5 className="card-title text-dark fw-medium fs-6">{title}</h5>
                  <p className="card-text text-muted small mt-2">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="text-light py-5" style={{ backgroundColor: "#123A3E" }}>
        <div className="container py-4">
          <Eyebrow>The flagship offer</Eyebrow>
          <h2 className="font-serif display-6 fw-medium text-white mb-3" style={{ maxWidth: "600px" }}>
            Free content builds trust. Coaching turns it into an offer letter.
          </h2>
          <p className="text-light-50 mb-4" style={{ maxWidth: "600px" }}>
            1:1 mock interviews for HR and operational rounds, personalized feedback with the STAR method, and dedicated Versant/English assessment coaching.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="btn rounded-pill px-4 py-3 fw-medium d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: "#D9A441", color: "#12211F" }}
          >
            See all services <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}