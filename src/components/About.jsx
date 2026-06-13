import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import styles from "./About.module.css";
import Reveal from "./Reveal";

const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className={styles.statNum}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <Reveal className={styles.labelRow}>
          <span className={styles.sectionLabel}>About</span>
        </Reveal>

        <div className={styles.content}>
          <Reveal className={styles.left} y={30}>
            <h2 className={styles.heading}>
              Analyst by skill,<br />
              <em>storyteller</em> by data.
            </h2>
          </Reveal>

          <Reveal className={styles.right} y={30} delay={0.15}>
            <p className={styles.bio}>{personalInfo.bio}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Counter to={3} suffix="+" />
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <Counter to={10} suffix="+" />
                <span className={styles.statLabel}>Tools Mastered</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;