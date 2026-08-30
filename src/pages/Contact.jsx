import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import Eyebrow from "../components/Eyebrow";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myWhatsAppNumber = "971525905409";

    const messageText = encodeURIComponent(
      `📌 *طلب استشارة / حجز جديد من الموقع*\n\n` +
        `👤 *الاسم:* ${formData.name}\n` +
        `✉️ *البريد الإلكتروني:* ${formData.email}\n` +
        `🎯 *الخدمة المطلوبة:* ${formData.service}\n` +
        `💬 *تفاصيل الرسالة:*\n${formData.message}`
    );

    // استخدام location.href يضمن عدم حظر المتصفح للرابط (Pop-up blocker)
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${messageText}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div>
      {/* HERO BANNER SECTION */}
      <div className="container pt-4">
        <div
          className="position-relative rounded-4 overflow-hidden border border-secondary-subtle shadow-lg"
          style={{ minHeight: "220px", backgroundColor: "#123A3E" }}
        >
          {/* Gradient Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(18, 58, 62, 0.4) 0%, rgba(18, 58, 62, 0.95) 100%)",
            }}
          />

          {/* Banner Text */}
          <div
            className="position-relative z-1 p-4 p-md-4 d-flex flex-column justify-content-center text-white"
          >
            <Eyebrow>Get in Touch</Eyebrow>
            <h1
              className="font-serif display-6 fw-medium text-white mb-2 mt-1"
              style={{ maxWidth: "600px" }}
            >
              Let’s secure your next career move.
            </h1>
            <p
              className="text-light-50 lead fs-6 mb-0"
              style={{ maxWidth: "550px", opacity: 0.9 }}
            >
              Have questions about coaching sessions or Versant prep? Send a
              message directly via WhatsApp or fill out the form.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT FORM & INFO SECTION */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Details */}
          <div className="col-12 col-lg-5">
            <h3 className="font-serif fs-3 fw-medium text-dark mb-4">
              Contact Information
            </h3>
            <p className="text-secondary mb-4">
              Feel free to reach out directly through any of the channels below.
            </p>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#E6F0F0",
                  }}
                >
                  <Phone size={20} style={{ color: "#123A3E" }} />
                </div>
                <div>
                  <div className="text-muted small">WhatsApp / Direct</div>
                  <div className="fw-medium text-dark">+971 52 590 5409</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#E6F0F0",
                  }}
                >
                  <Mail size={20} style={{ color: "#123A3E" }} />
                </div>
                <div className="text-break">
                  <div className="text-muted small">Email</div>
                  <div className="fw-medium text-dark">
                    ahmed.moussa.coaching@gmail.com
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#E6F0F0",
                  }}
                >
                  <MapPin size={20} style={{ color: "#123A3E" }} />
                </div>
                <div>
                  <div className="text-muted small">Location</div>
                  <div className="fw-medium text-dark">
                    Dubai, United Arab Emirates
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-lg-7">
            <div className="card rounded-4 p-4 border border-secondary-subtle bg-white shadow-sm">
              <div className="card-body">
                <h3 className="font-serif fs-4 fw-medium text-dark mb-4">
                  Send a Direct WhatsApp Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-medium text-dark">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control rounded-3 py-2 border-secondary-subtle"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-medium text-dark">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control rounded-3 py-2 border-secondary-subtle"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-medium text-dark">
                      Interested Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select rounded-3 py-2 border-secondary-subtle"
                    >
                      <option value="" disabled hidden>
                        Select a service...
                      </option>
                      <option value="Initial Consultation">
                        Free Initial Consultation
                      </option>
                      <option value="Interview Coach">Interview Coach</option>
                      <option value="CV Review">CV Review</option>
                      <option value="Versant & English Assessment Strategy">
                        Versant & English Assessment Strategy
                      </option>
                      <option value="Group Coaching Program">
                        Group Coaching Program
                      </option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-medium text-dark">
                      Message / Interview Details
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control rounded-3 py-2 border-secondary-subtle"
                      placeholder="Tell me about the role or company you are applying for..."
                    ></textarea>
                  </div>

                  {/* Cloudflare Turnstile Component */}
                  <div className="mb-4 d-flex justify-content-center">
                    <Turnstile
                      siteKey="0x4AAAAAAEcDIFGtFuB7NTyQ"
                      onSuccess={(token) => setTurnstileToken(token)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn rounded-pill px-4 py-3 w-100 fw-medium d-inline-flex align-items-center justify-content-center gap-2 text-white"
                    style={{
                      backgroundColor: "#25D366",
                      borderColor: "#25D366",
                      cursor: "pointer",
                    }}
                  >
                    <MessageSquare size={18} /> Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}