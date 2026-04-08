import { projects } from "../data/portfolioData";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Projects</span>
          <h2 className={styles.heading}>
            Selected <em>Work</em>
          </h2>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectItem}>
              <div className={styles.projectNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.projectLinks}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkBtn}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.liveBtn}`}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;