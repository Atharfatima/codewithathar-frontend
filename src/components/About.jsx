import React from "react";
import { SITE } from "../data";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I’m Athar, a Frontend Web Developer specializing in React. I’m
          passionate about UI/UX design and performance optimization, focusing
          on building accessible, responsive, and high-performing client-side
          applications that deliver seamless user experiences.
        </p>

        <h3>Experience</h3>
        <ul>
          <li>Frontend development — React, JavaScript, HTML, CSS</li>
          <li>Responsive & accessible design</li>
          <li>Fiverr seller — frontend projects & landing pages</li>
        </ul>

        <h3>Contact</h3>
        <p>
          WhatsApp:{" "}
          <a
            href={`https://wa.me/${SITE.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            +92 301 4718577
          </a>
        </p>
      </div>
    </section>
  );
}
