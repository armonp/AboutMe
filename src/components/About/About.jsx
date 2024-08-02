import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          className={styles.aboutImage}
          alt="Picture of Me Working"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Development</h3>
              <p>HTML, CSS, JavaScript, React, and Blazor</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Development</h3>
              <p>Experience developing and optimizing APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
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
