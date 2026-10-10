import { certifications } from "../../data/certifications.js";
import styles from "./Certifications.module.css";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.label}>
          <span>04</span>
          <span className={styles.labelLine} />
          <span>Certifications</span>
        </div>

        <h2 className={styles.heading}>
          <span className={styles.sans}>Always</span>
          <span className={styles.serif}>learning.</span>
        </h2>

        <p className={styles.desc}>
          {certifications.length} certifications and credentials across core
          computer science, data structures and web development.
        </p>
      </div>

      <ol className={styles.list}>
        {certifications.map((c, i) => (
          <li key={c.id} className={styles.row} tabIndex={0}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>

            <div className={styles.body}>
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