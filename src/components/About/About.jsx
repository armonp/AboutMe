import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section
      className={styles.container}
      id="about"
      aria-labelledby="about-title"
    >
      <h2 id="about-title" className={styles.title}>
        About
      </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          className={styles.aboutImage}
          alt="Armon Porter working at a computer, showcasing development environment"
        />
        <ul className={styles.aboutItems} role="list">
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <div className={styles.aboutItemText}>
              <h3>Front-End Development</h3>
              <p>HTML, CSS, JavaScript, React, and Blazor</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <div className={styles.aboutItemText}>
              <h3>Back-End Development</h3>
              <p>Experience developing and optimizing APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <div className={styles.aboutItemText}>
              <h3>Cloud</h3>
              <p>Deploying and managing applications in the cloud</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
