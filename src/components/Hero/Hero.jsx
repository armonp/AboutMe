import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Armon </h1>
        <p className={styles.description}>
          I am a full stack developer. Reach out if you'd like to learn more
        </p>
        <a className={styles.contactBtn} href="mailto:armon.porter@gmail.com">
          Contact me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
