import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleNavLinkClick = () => {
    // event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top of the page
  };
  return (
    <footer>
      <div className="footer-left">
        <NavLink to="/" onClick={handleNavLinkClick}>
          <img src="./assets/logo.svg" alt="logo" />
        </NavLink>

        <div className="footer-nav show">
          <div>
            <NavLink to="/" onClick={handleNavLinkClick}>
              HOME
            </NavLink>
          </div>
          <div>
            <NavLink to="/headphones" onClick={handleNavLinkClick}>
              HEADPHONES
            </NavLink>
          </div>
          <div>
            <NavLink to="/speakers" onClick={handleNavLinkClick}>
              SPEAKERS
            </NavLink>
          </div>
          <div>
            <NavLink to="/earPhones" onClick={handleNavLinkClick}>
              EARPHONES
            </NavLink>
          </div>
        </div>

        <p>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <p>Copyright 2023. All Rights Reserved</p>
      </div>

      <section className="footer-right">
        <div className="footer-nav hide">
          <div>
            <NavLink to="/" onClick={handleNavLinkClick}>
              HOME
            </NavLink>
          </div>
          <div>
            <NavLink to="/HeadPhones" onClick={handleNavLinkClick}>
              HEADPHONES
            </NavLink>
          </div>
          <div>
            <NavLink to="/Speakers" onClick={handleNavLinkClick}>
              SPEAKERS
            </NavLink>
          </div>
          <div>
            <NavLink to="/EarPhones" onClick={handleNavLinkClick}>
              EARPHONES
            </NavLink>
          </div>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/sample-tayo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" color="#fff" />
          </a>
          <a
            href="https://twitter.com/sample_tayo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" color="#fff" />
          </a>
          <a
            href="https://instagram.com/sample_tayo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" color="#fff" />
          </a>
          <a
            href="https://linkedin.com/in/bolaji-makinde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" color="#fff" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
