import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container} role="contentinfo">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul
          className={styles.links}
          role="list"
          aria-label="Contact information and social media links"
        >
          <li className={styles.link}>
            <a
              href="mailto:armon.porter@gmail.com"
              aria-label="Send email to Armon Porter at armon.porter@gmail.com"
            >
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.linkedin.com/in/armon-porter"
              aria-label="Visit Armon Porter's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.github.com/armonp"
              aria-label="Visit Armon Porter's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
