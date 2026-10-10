"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects.js";
import styles from "./Work.module.css";

/* ---------- Illustrations (pure CSS / JSX, no images needed) ---------- */

function FoodArt() {
  const steps = [
    ["Order placed", "Customer"],
    ["Preparing", "Restaurant owner"],
    ["Out for delivery", "Delivery partner"],
  ];
  return (
    <div className={styles.order}>
      <div className={styles.orderHead}>
        <span className={styles.mono}>LIVE ORDER · 3 ROLES</span>
        <span className={styles.paid}>Paid · Razorpay</span>
      </div>
      <ol className={styles.steps}>
        {steps.map(([title, role], i) => (
          <li key={title} className={i < 2 ? styles.stepDone : styles.stepNow}>
            <span className={styles.stepDot} />
            <div>
              <b>{title}</b>
              <small>{role}</small>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function TypingArt() {
  return (
    <div className={styles.typing}>
      <span className={styles.mono}>MEDIUM · 60 SEC</span>
      <p className={styles.sample}>
        <span className={styles.typed}>The quick brown fox jumps </span>
        <span className={styles.caret} />
        <span>over the lazy dog while the clock keeps running.</span>
      </p>
      <div className={styles.stats}>
        <div>
          <strong>62</strong>
          <small>WPM</small>
        </div>
        <div>
          <strong>96%</strong>
          <small>ACCURACY</small>
        </div>
        <div>
          <strong>3</strong>
          <small>ERRORS</small>
        </div>
      </div>
    </div>
  );
}

function MovieArt() {
  return (
    <div className={styles.movie}>
      <div className={styles.banner}>
        <span className={styles.bannerTag}>FEATURED</span>
        <i className={styles.bannerTitle} />
        <i className={styles.bannerSub} />
      </div>
      <span className={styles.mono}>TRENDING NOW</span>
      <div className={styles.posters}>
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i} style={{ opacity: 1 - i * 0.14 }} />
        ))}
      </div>
    </div>
  );
}

const artMap = { food: FoodArt, typing: TypingArt, movie: MovieArt };

/* ---------- Section ---------- */

export default function Work() {
  const [active, setActive] = useState(0);
  const timer = useRef(null);

  // Hover intent: wait a moment so quickly passing the cursor over a panel doesn't open it.
  const openWithDelay = (i) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(i), 160);
  };
  const openNow = (i) => {
    clearTimeout(timer.current);
    setActive(i);
  };
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <section id="work" className={styles.work}>
      <div className={styles.top}>
        <div>
          <div className={styles.label}>
            <span>03</span>
            <span className={styles.labelLine} />
            <span>Selected work</span>
          </div>
          <h2 className={styles.heading}>
            <span className={styles.headingSans}>Things I&apos;ve</span>{" "}
            <span className={styles.headingSerif}>built.</span>
          </h2>
        </div>
        <p className={styles.intro}>
          Three full-stack products: food delivery, typing practice and
          streaming. Hover a panel to open it.
        </p>
      </div>

      <div className={styles.panels}>
        {projects.map((p, i) => {
          const open = i === active;
          const Art = artMap[p.art];
          return (
            <article
              key={p.id}
              className={`${styles.panel} ${open ? styles.open : ""}`}
              onMouseEnter={() => openWithDelay(i)}
              onMouseLeave={() => clearTimeout(timer.current)}
            >
              {open ? (
                <div className={styles.content}>
                  <div className={styles.text}>
                    <span className={styles.meta}>
                      <b>{p.number}</b>
                      {p.tag}
                    </span>
                    <h3 className={styles.title}>
                      {p.title}
                      {p.subtitle && <em> {p.subtitle}</em>}
                    </h3>
                    <p className={styles.desc}>{p.description}</p>

                    <ul className={styles.features}>
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <ul className={styles.chips}>
                      {p.stack.map((s) => (
                        <li key={s}>
                          <span className={styles.chipDot} />
                          {s}
                        </li>
                      ))}
                      {p.more > 0 && (
                        <li className={styles.chipMore}>+{p.more}</li>
                      )}
                    </ul>

                    <div className={styles.ctaRow}>
                      <a
                        className={styles.cta}
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on GitHub <span aria-hidden="true">↗</span>
                      </a>
                      {p.live && (
                        <a
                          className={styles.ctaGhost}
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={styles.stage}>
                    <Art />
                    <span className={styles.caption}>
                      ILLUSTRATION {p.number}
                    </span>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className={styles.strip}
                  onClick={() => openNow(i)}
                  onFocus={() => openNow(i)}
                  aria-label={`Open ${p.title}`}
                >
                  <span className={styles.stripNum}>{p.number}</span>
                  <span className={styles.stripTitle}>{p.title}</span>
                  <span className={styles.plus} aria-hidden="true">
                    +
                  </span>
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}