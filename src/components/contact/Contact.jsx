import { useState } from "react";
import { Mail, Phone, LocationOn, LinkedIn, GitHub, Facebook, WhatsApp } from '@mui/icons-material';
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact-container">
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact-content">
          <div className="left">
            <img src="assets/shake.svg" alt="Handshake Illustration" className="contact-image" />
          </div>
          <div className="right">
            <div className="contact-card">
              <h2>Get in Touch</h2>
              <p>Have a question, project idea, or just want to say hi? Send a message below!</p>
              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
                {message && <span className="success">Thanks! I'll reply ASAP 😊</span>}
              </form>


            </div>
          </div>
          <a
            href="/Mohammad_Ainia.pdf"
            download
            className="download-cv-button"
          >
            📄 Download CV
          </a>

        </div>

      </div>


      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="info-item">
                <Mail className="icon" />
                <span>mohammadaymanainia@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone className="icon" />
                <span>+966 532218805</span>
              </div>
              <div className="info-item">
                <LocationOn className="icon" />
                <a
                  href="https://maps.app.goo.gl/JC9hH4xiLmLBmBDcA?g_st=com.google.maps.preview.copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  Riyadh, Saudi Arabia
                </a>
              </div>

            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#intro">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#portfolio">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="social-icon" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <GitHub className="social-icon" />
              </a>
              <a href="https://wa.me/966532218805" target="_blank" rel="noopener noreferrer">
                <WhatsApp className="social-icon" />
              </a>
              <a href="mailto:mohammadaymanainia@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="social-icon" />
              </a>
              <a href="https://www.facebook.com/share/15cWssih8Q/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mohammad Ainia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}