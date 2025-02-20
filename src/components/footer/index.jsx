import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <p>&copy; 2024 Kumawat Sound & Lights. All rights reserved.</p>
      </div>
    </footer>
  );
}
