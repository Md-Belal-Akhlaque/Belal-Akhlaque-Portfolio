"use client";

import { useState } from "react";
import { technologyFamilies, technologies } from "../../data/technologies.js";
import styles from "./TechStack.module.css";

// Dot color shown inside each filter chip
const familyDot = {
  Languages: "#23254d",
  Frontend: "#45414d",
  Backend: "#8f7f70",
  Databases: "#b3a69a",
  DevOps: "#d3c8b3",
  "Core CS": "#8a8794",
};

// Tile color per family (defined in the CSS module)
const familyTile = {
  Languages: styles.languages,
  Frontend: styles.frontend,
  Backend: styles.backend,
  Databases: styles.databases,
  DevOps: styles.devops,
  "Core CS": styles.core,
};

export default function TechStack() {
  const [activeFamily, setActiveFamily] = useState(null); // locked by click
  const [hoveredFamily, setHoveredFamily] = useState(null); // temporary, on hover
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null); // for touch screens

  const family = hoveredFamily ?? activeFamily;
  const previewId = hoveredId ?? selectedId;
  const preview = technologies.find((t) => t.id === previewId) || null;

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.label}>
        <span>02</span>
        <span className={styles.labelLine} />
        <span>Skills</span>
      </div>

      <h2 className={styles.heading}>
        <span className={styles.headingSans}>The periodic table</span>{" "}
        <span className={styles.headingSerif}>of my stack.</span>
      </h2>

      <p className={styles.description}>
        {technologies.length} elements in {technologyFamilies.length} families.
        Hover a tile to see its logo, or pick a family to light it up.
      </p>

      {/* Family filters */}
      <div className={styles.filters} role="group" aria-label="Technology families">
        {technologyFamilies.map((name) => {
          const isOn = family === name;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={activeFamily === name}
              className={`${styles.filter} ${isOn ? styles.filterOn : ""}`}
              onMouseEnter={() => setHoveredFamily(name)}
              onMouseLeave={() => setHoveredFamily(null)}
              onFocus={() => setHoveredFamily(name)}
              onBlur={() => setHoveredFamily(null)}
              onClick={() =>
                setActiveFamily((prev) => (prev === name ? null : name))
              }
            >
              <span
                className={styles.dot}
                style={isOn ? undefined : { background: familyDot[name] }}
              />
              {name}
            </button>
          );
        })}
      </div>

      <div className={styles.workspace}>
        {/* Periodic table */}
        <div className={styles.grid}>
          {technologies.map((t) => {
            const dimmed = family !== null && family !== t.category;
            return (
              <button
                key={t.id}
                type="button"
                aria-label={`${t.name}, ${t.category}`}
                className={[
                  styles.tile,
                  familyTile[t.category],
                  dimmed ? styles.dimmed : "",
                ].join(" ")}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(t.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => setSelectedId(t.id)}
              >
                <span className={styles.number}>{t.number}</span>
                <span className={styles.symbol}>{t.symbol}</span>
                <span className={styles.name}>{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Preview card */}
        <aside className={styles.preview} aria-live="polite">
          {preview ? (
            <>
              <div className={styles.logoBox}>
                {preview.logo ? (
                  <span
                    role="img"
                    aria-label={`${preview.name} logo`}
                    className={styles.logo}
                    style={{
                      backgroundColor: preview.logoColor || "#23254d",
                      WebkitMaskImage: `url(${preview.logo})`,
                      maskImage: `url(${preview.logo})`,
                    }}
                  />
                ) : (
                  <span className={styles.logoFallback}>{preview.symbol}</span>
                )}
              </div>
              <h3 className={styles.previewName}>{preview.name}</h3>
              <span className={styles.previewFamily}>{preview.category}</span>
              {preview.description && (
                <p className={styles.previewText}>{preview.description}</p>
              )}
            </>
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyArrow} aria-hidden="true">
                &#8598;
              </span>
              <p>Hover any element to see its logo</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}



// "use client";

// import { useState } from "react";
// import {
//   technologyFamilies,
//   technologies,
// } from "../data/technologies.js";
// import styles from "./TechStack.module.css";

// export default function TechStack() {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [hoveredTechnology, setHoveredTechnology] = useState(null);

//   const previewTechnology =
//     technologies.find(
//       (technology) => technology.id === hoveredTechnology
//     ) || null;

//   return (
//     <section id="skills" className={styles.skills}>
//       {/* Section label */}
//       <div className={styles.sectionLabel}>
//         <span>02</span>
//         <span>Skills</span>
//       </div>

//       {/* Heading */}
//       <div className={styles.headingArea}>
//         <h2 className={styles.heading}>
//           <span className={styles.headingStrong}>
//             The periodic table
//           </span>{" "}
//           <span className={styles.headingSerif}>
//             of my stack.
//           </span>
//         </h2>

//         <p className={styles.description}>
//           Explore the technologies I use to build full-stack products.
//           Hover a category to highlight it, or hover a technology to
//           preview it.
//         </p>
//       </div>

//       {/* Category filters */}
//       <div
//         className={styles.filters}
//         aria-label="Technology categories"
//       >
//         {technologyFamilies.map((category) => {
//           return (
//             <button
//               key={category}
//               type="button"
//               className={styles.filter}
//               onMouseEnter={() => setHoveredCategory(category)}
//               onMouseLeave={() => setHoveredCategory(null)}
//               onFocus={() => setHoveredCategory(category)}
//               onBlur={() => setHoveredCategory(null)}
//             >
//               <span className={styles.filterDot} />
//               <span>{category}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Main workspace */}
//       <div className={styles.workspace}>
//         {/* Technology grid */}
//         <div className={styles.grid}>
//           {technologies.map((technology) => {
//             const isCategoryHighlighted =
//               hoveredCategory === technology.category;

//             const isCategoryDimmed =
//               hoveredCategory !== null &&
//               !isCategoryHighlighted;

//             return (
//               <button
//                 key={technology.id}
//                 type="button"
//                 className={`${styles.tile} ${
//                   isCategoryHighlighted
//                     ? styles.tileHighlighted
//                     : ""
//                 } ${
//                   isCategoryDimmed
//                     ? styles.tileDimmed
//                     : ""
//                 }`}
//                 onMouseEnter={() =>
//                   setHoveredTechnology(technology.id)
//                 }
//                 onMouseLeave={() =>
//                   setHoveredTechnology(null)
//                 }
//                 onFocus={() =>
//                   setHoveredTechnology(technology.id)
//                 }
//                 onBlur={() =>
//                   setHoveredTechnology(null)
//                 }
//               >
//                 <span className={styles.tileNumber}>
//                   {technology.number}
//                 </span>

//                 <span className={styles.tileSymbol}>
//                   {technology.symbol}
//                 </span>

//                 <span className={styles.tileName}>
//                   {technology.name}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Preview */}
//         <aside className={styles.preview}>
//           {previewTechnology ? (
//             <>
//               <span className={styles.previewCategory}>
//                 {previewTechnology.category}
//               </span>

//               <div className={styles.previewLogo}>
//                 {previewTechnology.logo ? (
//                   <span
//                     className={styles.previewLogoImage}
//                     style={{
//                       "--logo-image": `url(${previewTechnology.logo})`,
//                       "--logo-color":
//                         previewTechnology.logoColor ||
//                         "var(--color-accent)",
//                     }}
//                     role="img"
//                     aria-label={`${previewTechnology.name} logo`}
//                   />
//                 ) : (
//                   <span className={styles.previewLogoFallback}>
//                     {previewTechnology.symbol}
//                   </span>
//                 )}
//               </div>

//               <h3>{previewTechnology.name}</h3>

//               <p>
//                 {previewTechnology.description ||
//                   "Technology from my development stack."}
//               </p>
//             </>
//           ) : (
//             <div className={styles.previewEmpty}>
//               <span>Hover a technology</span>

//               <p>
//                 Preview the technology, its logo, and its role
//                 in my stack.
//               </p>
//             </div>
//           )}
//         </aside>
//       </div>
//     </section>
//   );
// }