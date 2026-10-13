import { achievements } from "../../data/achivements.js";
import styles from "./Achievement.module.css";

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.label}>
          <span>05</span>
          <span className={styles.labelLine} />
          <span>Achievements</span>
        </div>

        <h2 className={styles.heading}>
          <span className={styles.sans}>Proud</span>
          <span className={styles.serif}>moments.</span>
        </h2>

        <p className={styles.desc}>
          {achievements.length} milestones across core computer science, data
          structures and full-stack web development.
        </p>
      </div>

      <ol className={styles.list}>
        {achievements.map((c, i) => (
          <li key={c.id} className={styles.row} tabIndex={0}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>

            <div className={styles.body}>
              <span className={styles.kind}>{c.kind}</span>
              <h3 className={styles.title}>{c.title}</h3>
              <span className={styles.issuer}>{c.issuer}</span>
              <div className={styles.noteWrap}>
                <p className={styles.note}>{c.note}</p>
              </div>
            </div>

            {c.link && (
              <a
                className={styles.view}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View credential: ${c.title}`}
              >
                View <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}