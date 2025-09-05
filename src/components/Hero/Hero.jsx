import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.greeting}>
          <span className={styles.greetingText}>Hi, I'm</span>
        </div>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.firstName}>Armon</span>
          <span className={styles.lastName}>Porter</span>
        </h1>
        <div className={styles.subtitle}>
          <span className={styles.role}>Full Stack Developer</span>
          <span className={styles.specialization}>
            Building digital experiences with modern technologies
          </span>
        </div>
        <p className={styles.description}>
          Passionate about creating scalable web applications and solving
          complex problems through elegant code. Let's build something amazing
          together.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primaryBtn}
            href="mailto:armon.porter@gmail.com"
            aria-label="Send email to armon.porter@gmail.com"
          >
            <span>Get In Touch</span>
            <svg
              className={styles.btnIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className={styles.secondaryBtn}
            href="#projects"
            aria-label="View my projects"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.heroImg}
          src={getImageUrl("hero/heroImage.png")}
          alt="Professional headshot of Armon Porter, full stack developer"
        />
      </div>
      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};
