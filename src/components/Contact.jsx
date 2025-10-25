import React, { useState } from "react";
import { SITE } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from portfolio: ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  const waLink = `https://wa.me/${
    SITE.whatsappNumber
  }?text=${encodeURIComponent(
    "Hello, I would like to contact you regarding a project."
  )}`;

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          You can reach me directly via WhatsApp or by sending a quick message
          below.
        </p>

        <div className="contact-grid">
          {/* ==== LEFT: FORM ==== */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-buttons">
              <button type="submit" className="contact-btn primary">
                ✉️ Send Email
              </button>
              <a
                className="contact-btn secondary"
                href={waLink}
                target="_blank"
                rel="noreferrer"
              >
                💬 Message on WhatsApp
              </a>
            </div>
          </form>

          {/* ==== RIGHT: LINKS ==== */}
          <div className="contact-info">
            <h3>Connect with Me</h3>
            <ul>
              <li>
                📱 <a href={waLink}>WhatsApp</a>
              </li>
              <li>
                💼 <a href={SITE.fiverr}>Fiverr</a>
              </li>
              <li>
                📸 <a href={SITE.instagram}>Instagram</a>
              </li>
              <li>
                🌐 <a href={SITE.facebook}>Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
