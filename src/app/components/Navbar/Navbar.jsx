"use client";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));

    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.35;
      let nextActive = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= threshold) {
          nextActive = id;
        }
      }

      setActiveId(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <a href="#" className={styles.logo} aria-label="Back to top">
        BA
      </a>

      <nav className={styles.navbar} aria-label="Main navigation">
        {navItems.map((item) => {
          const id = item.href.slice(1);
          const isActive = activeId === id;

          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              onClick={() => setActiveId(id)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
