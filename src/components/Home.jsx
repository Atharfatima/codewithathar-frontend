import React from "react";
import { SITE } from "../data";
import { Link } from "react-router-dom";
import { skills } from "../data";

export default function Home() {
  const waLink = `https://wa.me/${
    SITE.whatsappNumber
  }?text=${encodeURIComponent(SITE.whatsappText)}`;

  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <h2>
            Hello — I'm <span style={{ color: "#0ea5a4" }}>Athar</span>
          </h2>
          <div className="tagline">{SITE.tagline}</div>
          <p className="card">
            I build clean, responsive front-end applications using React. I
            focus on performance, accessibility and maintainable components. You
            can view my services or contact me directly.
          </p>

          <div className="home-buttons">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              💬 Message on WhatsApp
            </a>
            <Link to="/services" className="btn secondary-btn">
              ⚡ View My Services
            </Link>
          </div>
        </div>

        <div className="hero-right card">
          <h3>Skills</h3>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.name} className="skill">
                <div style={{ width: "30%" }}>{s.name}</div>
                <div className="progress" aria-hidden>
                  <i style={{ width: `${s.level}%` }}></i>
                </div>
                <div style={{ width: "8%" }}>{s.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <div style={{ marginTop: 40 }}>
        <div className="card">
          <h3>Featured Projects</h3>
          <p className="muted">
            Here are some of my highlighted front-end projects.
          </p>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <img
                src="public/projects/.projects/project2.jpg"
                alt="Project 1"
              />
              <div className="project-info">
                <h4>Portfolio Website</h4>
                <p>Modern responsive portfolio built with React and Vite.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  🔗 View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <img
                src="public/projects/.projects/project1.jpg"
                alt="Project 2"
              />
              <div className="project-info">
                <h4>Business Landing Page</h4>
                <p>Clean and optimized landing page using Tailwind CSS.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  🔗 View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <img
                src="public/projects/.projects/project3.jpg"
                alt="Project 3"
              />
              <div className="project-info">
                <h4>React Dashboard</h4>
                <p>Dynamic admin dashboard with charts and dark mode.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
