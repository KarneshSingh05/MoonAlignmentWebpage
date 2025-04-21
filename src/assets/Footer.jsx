export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Welcome to my moon alignment tracker webpage . a web app that
            displays moon angles,visibility, positions, and alignments.
          </p>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>

            <li>About</li>

            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>
            Address: Dharamshala himachal pradesh
            <br />
            Phone: +1 123 456 7890
            <br />
            Email: <a>karnesh526@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Moon Alignment Tracker Webpage .</p>
      </div>
    </div>
  );
};
