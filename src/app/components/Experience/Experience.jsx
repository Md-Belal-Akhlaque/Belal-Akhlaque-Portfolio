import { timeline } from "../../data/timeline.js";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.label}>
        <span>05</span>
        <span className={styles.labelLine} />
        <span>Experience</span>
      </div>

      <h2 className={styles.heading}>
        <span className={styles.sans}>Education &amp;</span>{" "}
        <span className={styles.serif}>experience.</span>
      </h2>

      <p className={styles.desc}>
        The path so far, and the foundations I build on.
      </p>

      <ol className={styles.timeline}>
        {timeline.map((item, i) => (
          <li
            key={item.id}
            className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
          >
            <span className={styles.year}>{item.startYear}</span>
            <span className={styles.dot} aria-hidden="true" />

            <article className={styles.card}>
              <span className={styles.type}>{item.type}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.org}>{item.org}</p>
              <p className={styles.period}>{item.period}</p>
              <div className={styles.meta}>
                {item.score && <span className={styles.score}>{item.score}</span>}
                {item.badge && <span className={styles.badge}>★ {item.badge}</span>}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}