import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <article className={styles.container} role="listitem">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Screenshot of ${title} project showing main interface`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul
        className={styles.skills}
        role="list"
        aria-label={`Technologies used in ${title}`}
      >
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div
        className={styles.links}
        role="group"
        aria-label={`Links for ${title} project`}
      >
        <a
          href={demo}
          className={styles.link}
          aria-label={`View live demo of ${title} project`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={source}
          className={styles.link}
          aria-label={`View source code for ${title} project on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </article>
  );
};
