export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Evently</h4>
          <p>Discover and create unforgettable experiences. Connect with people who share your passion.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Explore Events</a></li>
            <li><a href="/">Host an Event</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <span className="social-icon">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Evently — Built with ❤️ | All Rights Reserved</p>
      </div>
    </footer>
  );
}
