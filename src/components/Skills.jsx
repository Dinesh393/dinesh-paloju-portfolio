import { skills } from "../data/portfolioData";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Skills</span>
          <h2 className={styles.heading}>
            Tools & <em>Technologies</em>
          </h2>
        </div>

        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Data Analytics</h3>
            <div className={styles.skillGrid}>
              {skills.dataAnalytics.map((skill) => (
                <div key={skill.name} className={styles.skillCard}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Additional Skills</h3>
            <div className={styles.skillGrid}>
              {skills.additional.map((skill) => (
                <div key={skill.name} className={`${styles.skillCard} ${styles.skillCardAlt}`}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;