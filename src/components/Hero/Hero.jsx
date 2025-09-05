import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Hi, I'm Armon
        </h1>
        <p className={styles.description}>
          I am a full stack developer. Reach out if you'd like to learn more
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:armon.porter@gmail.com"
          aria-label="Send email to armon.porter@gmail.com"
        >
          Contact me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Professional headshot of Armon Porter, full stack developer"
      />
      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};
