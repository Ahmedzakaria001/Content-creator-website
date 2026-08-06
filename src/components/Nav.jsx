import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/siteData";
import PrimaryButton from "./PrimaryButton";

export default function Nav({ page, setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md sticky-top bg-surface border-bottom border-secondary-subtle py-3" style={{ backgroundColor: "rgba(237, 241, 238, 0.95)", backdropFilter: "blur(5px)" }}>
      <div className="container">
        <button
          onClick={() => {
            setPage("home");
            setIsOpen(false);
          }}
          className="navbar-brand font-serif fs-4 fw-medium text-dark border-0 bg-transparent p-0"
        >
          Ahmed Moussa
        </button>

        <button
          className="navbar-toggler border-0 p-0 text-dark"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-4 my-3 my-md-0">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  onClick={() => {
                    setPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`nav-link font-mono text-uppercase border-0 bg-transparent px-0 py-1 ${
                    page === item.id ? "text-dark fw-bold border-bottom border-dark" : "text-muted"
                  }`}
                  style={{ fontSize: "18px", letterSpacing: "0.05em" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="ms-md-4 mt-3 mt-md-0">
            <PrimaryButton
              onClick={() => {
                setPage("contact");
                setIsOpen(false);
              }}
            >
              Book a session
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
}