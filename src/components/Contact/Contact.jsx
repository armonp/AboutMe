import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container} role="contentinfo">
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Let's Connect</h2>
          <p>Ready to build something amazing together?</p>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="mailto:armon.porter@gmail.com"
            className={styles.socialLink}
            aria-label="Send email to Armon Porter"
          >
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/armon-porter"
            className={styles.socialLink}
            aria-label="Visit Armon Porter's LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.github.com/armonp"
            className={styles.socialLink}
            aria-label="Visit Armon Porter's GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2025 Armon Porter. Built with React & Vite.</p>
      </div>
    </footer>
  );
};
