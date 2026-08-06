import React from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS, SOCIALS } from "../data/siteData";

export default function Footer() {
  // دالة لتحويل id العنصر إلى مسار URL المناسب
  const getPath = (id) => (id === "home" ? "/" : `/${id}`);

  return (
    <footer className="bg-dark text-light border-top border-secondary pt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="font-serif fs-4 mb-3">Ahmed Moussa</div>
            <p className="text-secondary small leading-relaxed">
              Helping job seekers clear BPO and customer service interviews — one mock round at a time.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <div className="font-mono text-uppercase text-warning small mb-3">Navigate</div>
            <div className="d-flex flex-column gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={getPath(item.id)}
                  className="text-decoration-none text-light text-start small hover-warning"
                  style={{ width: "fit-content" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="font-mono text-uppercase text-warning small mb-3">Follow along</div>
            <div className="d-flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="social-icon-btn"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-top border-secondary py-3 mt-4 text-center font-mono text-secondary small" style={{ fontSize: "11px" }}>
        © {new Date().getFullYear()} Eagles. All Rights Reserved. 
      </div>
    </footer>
  );
}