import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:armon.porter@gmail.com">
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt="Email icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/armon-porter">
              {" "}
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.github.com/armonp">
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
