import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Pause } from "lucide-react";
import { profile } from "../../data/profile.js";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundName} aria-hidden="true">
        BELAL
      </div>

      <div className={styles.portraitWrap} aria-hidden="true">
        <Image
          src={profile.mainPhoto}
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 62vw, 360px"
          className={styles.portrait}
        />
      </div>

      <button
        className={styles.mediaControl}
        type="button"
        aria-label="Pause avatar animation"
      >
        <Pause size={14} strokeWidth={2} />
      </button>

      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.name}>{profile.fullName}</p>

          <h1 className={styles.title}>
            Full Stack
            <br /> Developer.
          </h1>

          <p className={styles.description}>
            MERN developer / DSA learner / reliable product builder
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="#work" className={styles.primaryAction}>
            Explore Work
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>

          <div className={styles.innerAction}>
            <Link href="#contact" className={styles.secondaryAction}>
              Let&apos;s Talk
            </Link>

            <a href={profile.resume} className={styles.secondaryAction}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
