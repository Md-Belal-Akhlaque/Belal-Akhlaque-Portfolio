import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { profile } from "../../data/profile.js";
import styles from "./About.module.css";

const cardSkills = [
  {
    title: "Full Stack Developer",
    subtitle: "React / Node.js / Modern JavaScript",
  },
  {
    title: "MERN Builder",
    subtitle: "MongoDB / Express.js / React / Node.js",
  },
  {
    title: "Problem Solver",
    subtitle: "Data Structures and Algorithms",
  },
  {
    title: "Backend Fundamentals",
    subtitle: "REST APIs / JWT / role-based access",
  },
  {
    title: "MCA Student",
    subtitle: "JSS Academy of Technical Education",
  },
];

export default function About() {
  // A button only shows when its link is filled in profile.js
  const socialLinks = [
    {
      label: "GitHub",
      href: profile.github,
      image: "/images/social/github.png",
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      image: "/images/social/linkedin.png",
    },
  ].filter((link) => link.href);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.label}>
        <span>01</span>
        <span>About</span>
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>
            <span className={styles.headingSans}>Hi, I&apos;m</span>{" "}
            <span className={styles.headingSerif}>{profile.firstName}.</span>
          </h2>

          <p className={styles.introText}>{profile.bio}</p>
          <p className={styles.introText}>{profile.bioSecondary}</p>

          <div className={styles.socialLinks}>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialButton} ${styles.resumeButton}`}
            >
              <FileText size={14} strokeWidth={1.8} />
              Resume
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>

            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <span className={styles.socialIcon}>
                  <Image src={link.image} alt="" width={24} height={24} />
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*
          Structure (each layer does ONE job, so animations never fight):
          idCard      -> hover / focus target
          swing       -> pendulum motion (rotateZ), carries the lanyard too
          flipStage   -> perspective for the 3D flip
          cardInner   -> flips (rotateY) on hover
        */}
        <div
          className={styles.idCard}
          tabIndex={0}
          aria-label="Developer ID card. Hover or focus to flip."
        >
          <div className={styles.swing}>
            <div className={styles.lanyard} aria-hidden="true">
              <div className={styles.lanyardStrap} />
              <div className={styles.metalHook}>
                <span />
              </div>
            </div>

            <div className={styles.flipStage}>
              <div className={styles.cardInner}>
                <article className={`${styles.cardFace} ${styles.cardFront}`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardBadge}>{profile.initials}</div>

                    <div>
                      <span className={styles.cardHeaderTitle}>
                        DEVELOPER ID
                      </span>
                      <span className={styles.cardHeaderSub}>
                        Portfolio / {profile.badge.validTill}
                      </span>
                    </div>
                  </div>

                  <div className={styles.photoFrame}>
                    <Image
                      src={profile.photo}
                      alt={profile.fullName}
                      fill
                      sizes="(max-width: 767px) 260px, 300px"
                      className={styles.profileImage}
                      priority
                    />
                  </div>

                  <div className={styles.cardName}>
                    <h3>{profile.fullName.toUpperCase()}</h3>
                    <p>{profile.role}</p>
                  </div>

                  <div className={styles.cardMeta}>
                    <div>
                      <span>ID</span>
                      <strong>{profile.badge.idNo}</strong>
                    </div>

                    <div>
                      <span>Focus</span>
                      <strong>Full Stack</strong>
                    </div>
                  </div>

                  <div className={styles.barcode} aria-hidden="true" />
                </article>

                <article className={`${styles.cardFace} ${styles.cardBack}`}>
                  <div className={styles.backTitle}>What I build</div>

                  <div className={styles.cardSkills}>
                    {cardSkills.map((skill) => (
                      <div className={styles.skillRow} key={skill.title}>
                        <span className={styles.check}>OK</span>

                        <div>
                          <strong>{skill.title}</strong>
                          <span>{skill.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.backFooter}>
                    <span>{profile.fullName.toUpperCase()}</span>
                    <span>PORTFOLIO / {profile.badge.validTill}</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.facts}>
          <p className={styles.factsLabel}>Quick Facts</p>

          <div className={styles.factList}>
            {profile.facts.map((fact) => (
              <div className={styles.factRow} key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>

          <p className={styles.quote}>&quot;{profile.quote}&quot;</p>
        </div>
      </div>
    </section>
  );
}