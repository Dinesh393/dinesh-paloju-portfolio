import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import styles from "./Contact.module.css";
import Reveal from "./Reveal";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeepdwkw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <span className={styles.sectionLabel}>Contact</span>

        <div className={styles.content}>
          {/* LEFT */}
          <Reveal className={styles.left} y={30}>
            <h2 className={styles.heading}>
              Let's work<br />
              <em>together.</em>
            </h2>
            <p className={styles.subtext}>
              Open to data analyst roles, freelance projects, and collaborations.
              Feel free to reach out — I'd love to connect.
            </p>

            <div className={styles.socialLinks}>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialItem}>
                <div className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className={styles.socialInfo}>
                  <span className={styles.socialLabel}>Email</span>
                  <span className={styles.socialValue}>{personalInfo.email}</span>
                </div>
                <span className={styles.socialArrow}>↗</span>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialItem}>
                <div className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className={styles.socialInfo}>
                  <span className={styles.socialLabel}>GitHub</span>
                  <span className={styles.socialValue}>Dinesh393</span>
                </div>
                <span className={styles.socialArrow}>↗</span>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialItem}>
                <div className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className={styles.socialInfo}>
                  <span className={styles.socialLabel}>LinkedIn</span>
                  <span className={styles.socialValue}>dinesh-paloju</span>
                </div>
                <span className={styles.socialArrow}>↗</span>
              </a>
            </div>
          </Reveal>

          {/* RIGHT - Contact Form */}
          <Reveal className={styles.right} y={30} delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input name="name" type="text" className={styles.input} placeholder="Enter your name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Email</label>
                  <input name="email" type="email" className={styles.input} placeholder="Enter your mail" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input name="subject" type="text" className={styles.input} placeholder="Project Collaboration" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea name="message" className={styles.textarea} placeholder="Tell me about your project or opportunity..." rows={5} required />
              </div>

              {status === "success" && (
                <div className={styles.successMsg}>
                  ✅ Hey I receieved your message! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className={styles.errorMsg}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status !== "sending" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} Paloju Dinesh.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;