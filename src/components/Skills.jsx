import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import styles from "./Skills.module.css";
import Reveal from "./Reveal";

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const SkillGrid = ({ items, altStyle }) => (
  <motion.div
    className={styles.skillGrid}
    variants={gridVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {items.map((skill) => (
      <motion.div
        key={skill.name}
        variants={cardVariants}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.97 }}
        className={`${styles.skillCard} ${altStyle ? styles.skillCardAlt : ""}`}
      >
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
      </motion.div>
    ))}
  </motion.div>
);

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className={styles.sectionLabel}>Skills</span>
          <h2 className={styles.heading}>
            Tools & <em>Technologies</em>
          </h2>
        </Reveal>

        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Data Analytics</h3>
            <SkillGrid items={skills.dataAnalytics} />
          </div>

          <div className={styles.divider} />

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Additional Skills</h3>
            <SkillGrid items={skills.additional} altStyle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;