import { experience } from "../data/portfolioData";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Experience</span>
          <h2 className={styles.heading}>
            Work <em>History</em>
          </h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.duration}>{exp.duration}</span>
                <span className={styles.type}>{exp.type}</span>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.dot} />
                <div className={styles.card}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>
                    {exp.company}
                    <span className={styles.location}> · {exp.location}</span>
                  </p>
                  <ul className={styles.points}>
                    {exp.points.map((point, i) => (
                      <li key={i} className={styles.point}>
                        <span className={styles.bullet}>—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;