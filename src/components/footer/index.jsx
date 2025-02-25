// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Section */}
        <div className="footer-section">
          <h2 className="company-name">KUMAWAT SOUND INDIA</h2>
          {/* <p className="tagline">FESTIVALS | CONCERTS | EVENTS | TOURS</p> */}
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="section-title">Get In Touch</h3>
          <div className="contact-info">
            <p>For More Info & Details:</p>
            <p>+91-7073779586 (Mon-Sat - 11am - 7pm)</p>
            <p>+91-9460729586 (Mon-Sat - 11am - 7pm)</p>
          </div>
        </div>

        {/* <div className="footer-section social-section">
          <div className="social-icons">
            <a href="/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="/" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="/" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div> */}

        {/* Address Section */}
        <div className="footer-section">
          <h3 className="section-title">Meeting Place</h3>
          <div className="address">
            <p>Kumawat Sound</p>
            <p>JK Mod, Kankroli, Rajsamand Rajasthan - 313324, India</p>
          </div>
        </div>
      </div>

      {/* <div className="footer-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3701103.1771275466!2d73.8929325!3d25.0558331!3m2!1i1024!2i768!4f13.1!2m1!1skumawat%20sound!5e0!3m2!1sen!2sin!4v1740408400049!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>
          Copyright © 1971 – 2025, Kumawat Sound India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
