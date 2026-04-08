import { personalInfo } from "../data/portfolioData";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <span className={styles.sectionLabel}>Contact</span>

        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Let's work<br />
              <em>together.</em>
            </h2>
            <p className={styles.subtext}>
              Open to data analyst roles, freelance projects, and collaborations.
              Feel free to reach out — I'd love to connect.
            </p>
          </div>

          <div className={styles.right}>
            <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
              {personalInfo.email}
              <span className={styles.arrow}>↗</span>
            </a>

            <div className={styles.links}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.externalLink}>
                GitHub
                <span>↗</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.externalLink}>
                LinkedIn
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} Paloju Dinesh. Built with React.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;