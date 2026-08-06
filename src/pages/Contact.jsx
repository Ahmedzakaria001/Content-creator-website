import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Eyebrow from "../components/Eyebrow";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Mock Interview & Feedback",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 استبدل هذا الرقم برقم الواتساب الخاص بك (متبوعاً بكود الدولة بدون +)
    // مثال للإمارات: 971501234567 أو مصر: 201012345678
    const myWhatsAppNumber = "971525905409"; 

    // تجهيز نص الرسالة وتنسيقها
    const messageText = 
      `📌 *طلب استشارة / حجز جديد من الموقع*%0A%0A` +
      `👤 *الاسم:* ${formData.name}%0A` +
      `✉️ *البريد الإلكتروني:* ${formData.email}%0A` +
      `🎯 *الخدمة المطلوبة:* ${formData.service}%0A` +
      `💬 *تفاصيل الرسالة:*%0A${formData.message}`;

    // فتح رابط الواتساب في نافذة جديدة
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${messageText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container py-5 my-4">
      <div className="row g-5">
        {/* معلومات التواصل */}
        <div className="col-12 col-lg-5">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="font-serif display-5 fw-medium text-dark mb-4" >
            Let’s secure your next career move.
          </h1 >
          <p className="text-secondary lead fs-6 mb-5">
            Have questions about coaching sessions or Versant prep? Send a message directly via WhatsApp or fill out the form.
          </p>

          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-teal" 
                style={{ width: "44px", height: "44px", backgroundColor: "#E6F0F0" }}
              >
                <Phone size={20} style={{ color: "#123A3E" }} />
              </div>
              <div>
                <div className="text-muted small">WhatsApp / Direct</div>
                <div className="fw-medium text-dark">971525905409</div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-teal" 
                style={{ width: "44px", height: "44px", backgroundColor: "#E6F0F0" }}
              >
                <Mail size={20} style={{ color: "#123A3E" }} />
              </div>
              <div>
                <div className="text-muted small">Email</div>
                <div className="fw-medium text-dark">ahmedmohmedhusseinabdrabo@gmail.com</div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-teal" 
                style={{ width: "44px", height: "44px", backgroundColor: "#E6F0F0" }}
              >
                <MapPin size={20} style={{ color: "#123A3E" }} />
              </div>
              <div>
                <div className="text-muted small">Location</div>
                <div className="fw-medium text-dark">Dubai, United Arab Emirates</div>
              </div>
            </div>
          </div>
        </div>

        {/* نموذج التواصل (Form) */}
        <div className="col-12 col-lg-7">
          <div className="card rounded-4 p-4 border border-secondary-subtle bg-white shadow-sm">
            <div className="card-body">
              <h3 className="font-serif fs-4 fw-medium text-dark mb-4">Send a Direct WhatsApp Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-dark">Your Name</label>
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
                  <label className="form-label small fw-medium text-dark">Email Address</label>
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
                  <label className="form-label small fw-medium text-dark">Interested Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select rounded-3 py-2 border-secondary-subtle"
                  >
                    <option > </option>
                    <option value="Mock Interview & STAR Feedback"> Interview Coach</option>
                    <option value="Versant & English Assessment Strategy">CV Review</option>
                    <option value="Full Career Growth Playbook">Group Coaching Program</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-medium text-dark">Message / Interview Details</label>
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

                <button
                  type="submit"
                  className="btn rounded-pill px-4 py-3 w-100 fw-medium d-inline-flex align-items-center justify-content-center gap-2 text-dark"
                  style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
                >
                  <MessageSquare size={18} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}