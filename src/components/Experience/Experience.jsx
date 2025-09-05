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
        <div
          className={styles.skills}
          role="region"
          aria-labelledby="skills-heading"
        >
          <h3 id="skills-heading" className="sr-only">
            Technical Skills
          </h3>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={`${skill.title} technology logo`}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <div role="region" aria-labelledby="work-history-heading">
          <h3 id="work-history-heading" className="sr-only">
            Work History
          </h3>
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
                      {historyItem.experiences.map((exp, id) => {
                        return <li key={id}>{exp}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
