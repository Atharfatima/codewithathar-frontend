import React from "react";
import { services } from "../data";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <p className="services-subtitle">
          💡 Click any service to go to my Fiverr gig page.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className="service-card">
              <h4>{s.title}</h4>
              <p className="service-desc">{s.description}</p>
              <p className="service-price">
                <strong>{s.price}</strong>
              </p>
              <a
                href={s.fiverrLink}
                target="_blank"
                rel="noreferrer"
                className="service-btn"
              >
                View on Fiverr
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
