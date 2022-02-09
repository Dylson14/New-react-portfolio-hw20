import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../Footer.css';

export default function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-right">
                    <a href="https://github.com/Dylson14" target="_blank">
                        <FontAwesomeIcon icon = {faGithub} />
                    </a>
                    <a href="https://www.youtube.com/c/Dylson" target="_blank">
                        <FontAwesomeIcon icon = {faYoutube} />
                    </a>
                    <a href="https://www.linkedin.com/in/dylsonoliveira/" target="_blank">
                        <FontAwesomeIcon icon = {faLinkedin} />
                    </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="/">
              Home
            </a>

            <a href="/resume">Resume</a>

            <a href="/about">About Me</a>

            <a href="/projects">Projects</a>

            <a href="/contact">Contact</a>

          </p>

          <p>Dylson &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}
