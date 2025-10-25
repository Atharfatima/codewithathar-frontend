import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLink } from "react-icons/fa";
import "./../styles/main.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Codewithathar</h3>
          <p>
            Frontend Web Developer specializing in React. Let's build something
            amazing together!
          </p>
        </div>

        <div className="footer-right">
          <h4>Connect with me</h4>
          <div className="social-icons">
            <a
              href="https://wa.me/03014718577"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566583837579"
              target="_blank"
              rel="noreferrer"
              className="facebook"
              title="Facebook Profile"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/atharfatima007/"
              target="_blank"
              rel="noreferrer"
              className="instagram"
              title="Instagram Profile"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.fiverr.com/codewithathar"
              target="_blank"
              rel="noreferrer"
              className="fiverr"
              title="View Fiverr Services"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Codewithathar. All rights reserved.
      </div>
    </footer>
  );
}
