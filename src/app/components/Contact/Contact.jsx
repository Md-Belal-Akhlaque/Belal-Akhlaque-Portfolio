"use client";

import { useState } from "react";
import { profile } from "../../data/profile.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard can be blocked; the mailto link still works */
    }
  };

  const links = [
    { label: "GitHub", href: profile.github, external: true },
    { label: "LinkedIn", href: profile.linkedin, external: true },
    { label: profile.phone, href: profile.phoneHref, external: false },
  ];

  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.panel}>
          <div className={styles.label}>
            <span>06</span>
            <span className={styles.labelLine} />
            <span>Contact</span>
          </div>

          <h2 className={styles.heading}>
            <span className={styles.dark}>Let&apos;s build</span>
            <span className={styles.muted}>
              something together<span className={styles.dark}>.</span>
            </span>
          </h2>

          <p className={styles.lead}>
            Have a role, a project or a question? Email is the fastest way to
            reach me.
          </p>

          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className={styles.actions}>
            <a className={styles.primary} href={`mailto:${profile.email}`}>
              Email me <span aria-hidden="true">↗</span>
            </a>
            <button type="button" className={styles.ghost} onClick={copyEmail}>
              {copied ? "Copied" : "Copy email"}
            </button>
            <span className={styles.status} aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                >
                  {l.label}
                  {l.external && <span aria-hidden="true"> ↗</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>
          &copy; {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>Built with Next.js</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}



// "use client";

// import { useState } from "react";
// import { profile } from "../../data/profile.js";
// import styles from "./Contact.module.css";

// export default function Contact() {
//   const [copied, setCopied] = useState(false);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(profile.email);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch {
//       /* clipboard can be blocked; the mailto link still works */
//     }
//   };

//   const links = [
//     { label: "GitHub", href: profile.github, external: true },
//     { label: "LinkedIn", href: profile.linkedin, external: true },
//     { label: profile.phone, href: profile.phoneHref, external: false },
//   ];

//   return (
//     <>
//       <section id="contact" className={styles.section}>
//         <div className={styles.panel}>
//           <div className={styles.label}>
//             <span>07</span>
//             <span className={styles.labelLine} />
//             <span>Contact</span>
//           </div>

//           <h2 className={styles.heading}>
//             <span className={styles.sans}>Let&apos;s</span>{" "}
//             <span className={styles.serif}>talk.</span>
//           </h2>

//           <p className={styles.lead}>
//             Have a role, a project or a question? Email is the fastest way to
//             reach me.
//           </p>

//           <a className={styles.email} href={`mailto:${profile.email}`}>
//             {profile.email}
//           </a>

//           <div className={styles.actions}>
//             <a className={styles.primary} href={`mailto:${profile.email}`}>
//               Email me <span aria-hidden="true">↗</span>
//             </a>
//             <button type="button" className={styles.ghost} onClick={copyEmail}>
//               {copied ? "Copied" : "Copy email"}
//             </button>
//             <span className={styles.status} aria-live="polite">
//               {copied ? "Email address copied to clipboard" : ""}
//             </span>
//           </div>

//           <ul className={styles.links}>
//             {links.map((l) => (
//               <li key={l.label}>
//                 <a
//                   href={l.href}
//                   target={l.external ? "_blank" : undefined}
//                   rel={l.external ? "noreferrer" : undefined}
//                 >
//                   {l.label}
//                   {l.external && <span aria-hidden="true"> ↗</span>}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       <footer className={styles.footer}>
//         <span>
//           &copy; {new Date().getFullYear()} {profile.fullName}
//         </span>
//         <span>Built with Next.js</span>
//         <a href="#">Back to top ↑</a>
//       </footer>
//     </>
//   );
// }