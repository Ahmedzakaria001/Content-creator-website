import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/siteData";
import PrimaryButton from "./PrimaryButton";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // دالة تحويل id العنصر إلى مسار URL
  const getPath = (id) => (id === "home" ? "/" : `/${id}`);

  return (
    <nav 
      className="navbar navbar-expand-md sticky-top bg-surface border-bottom border-secondary-subtle py-3" 
      style={{ backgroundColor: "rgba(237, 241, 238, 0.95)", backdropFilter: "blur(5px)" }}
    >
      <div className="container">
        {/* رابط اللوجو للرئيسية */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="navbar-brand font-serif fs-4 fw-medium text-dark text-decoration-none p-0"
        >
          Ahmed Moussa
        </Link>

        {/* زر التبديل للموبايل */}
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
                <NavLink
                  to={getPath(item.id)}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `nav-link font-mono text-uppercase px-0 py-1 text-decoration-none ${
                      isActive ? "text-dark fw-bold border-bottom border-dark" : "text-muted"
                    }`
                  }
                  style={{ fontSize: "18px", letterSpacing: "0.05em" }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ms-md-4 mt-3 mt-md-0">
            <PrimaryButton
              onClick={() => {
                navigate("/contact");
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