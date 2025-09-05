import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section
      className={styles.container}
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className={styles.title}>
        Projects
      </h2>
      <p>Coming Soon...</p>
      {/* <div className={styles.projects} role="list" aria-label="Portfolio projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div> */}
    </section>
  );
};
