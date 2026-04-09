import { personalInfo } from "../data/portfolioData";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.labelRow}>
          <span className={styles.sectionLabel}>About</span>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Analyst by skill,<br />
              <em>storyteller</em> by data.
            </h2>
          </div>

          <div className={styles.right}>
            <p className={styles.bio}>{personalInfo.bio}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Tools Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;