import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../components/footer.css";

function Footer() {
  return (
    <footer className="footerStyle">
      <div className="footerContent">
        <div className="copyright">
          <p>&copy; 2024 Ayanles portfolio</p>
        </div>

        <ul className="icon-parent">
          <li className="icons">
            <a href="https://github.com/Ayanle87">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="icons">
            {" "}
            <a href="https://linkedin.com/in/ayanle11">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="icons">
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li className="icons">
            <FontAwesomeIcon icon={faPhone} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
