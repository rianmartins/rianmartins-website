import React from "react";

import styles from "./Experiences.module.css";

type ExperiencesProps = {};

const EXPERIENCES = [
  {
    title: "Fullstack Developer",
    company: "Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Frontend Developer",
    company: "Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Frontend Developer",
    company: "Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Frontend Developer",
    company: "Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Frontend Developer",
    company: "Company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Experiences: React.FC<ExperiencesProps> = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>Experiences</div>
      <div className={styles.SubTitle}>This is my trajectory and my amazing experiences</div>
      <div className={styles.ExperiencesContainer}>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className={styles.Experience}>
            <div className={styles.ExperienceTitle}>{experience.title}</div>
            <img src="/right-arrow.svg" alt="right-arrow" width={120} />
            <div className={styles.ExperienceCompany}>{experience.company}</div>
            <div className={styles.ExperienceDescription}>{experience.description}</div>
            {/* <Arrow /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
