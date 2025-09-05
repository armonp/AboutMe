// create experience component
import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section
      className={styles.container}
      id="experience"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className={styles.title}>
        Experience
      </h2>
      <div className={styles.content}>
        <h3 className={styles.skillsTitle}>Technical Skills</h3>

        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div className={styles.skill} key={id}>
              <div className={styles.skillImageContainer}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={`${skill.title} technology logo`}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li className={styles.historyItem} key={id}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organization} company logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h4>
                    {`${historyItem.role} at ${historyItem.organization}`}
                  </h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
