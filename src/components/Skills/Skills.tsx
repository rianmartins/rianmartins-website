import React, { useMemo } from "react";
import styles from "./Skills.module.css";
import Card from "./Card/Card";

type SkillsProps = {};

const SKILLS = [
  {
    title: "TypeScript",
    description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    image: "/typescript.svg",
  },
  {
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    image: "/react.png",
  },
  {
    title: "Next.js",
    description: "Next.js is a React framework for production.",
    image: "/nextjs.png",
  },
  {
    title: "Node.js",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image: "/nodejs.png",
  },
];

const SKILLS_PER_PAGE = 3;
const NUMBER_OF_PAGES = Math.ceil(SKILLS.length / SKILLS_PER_PAGE);

const Skills: React.FC<SkillsProps> = () => {
  const [page, setPage] = React.useState<number>(0);
  const visibleSkills = useMemo(
    () => SKILLS.slice(page * SKILLS_PER_PAGE, SKILLS_PER_PAGE + page * SKILLS_PER_PAGE),
    [page]
  );

  const getSteps = () => {
    const steps = [];
    for (let i = 0; i < NUMBER_OF_PAGES; i++) {
      steps.push(
        <div key={i} className={i === page ? styles.ActiveStep : ""} onClick={() => setPage(i)} />
      );
    }
    return steps;
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>Skills</div>
      <div className={styles.SubTitle}>
        Those are some of my skills that I've developed throughout the years
      </div>
      <div className={styles.CardsContainer}>
        <div className={styles.Cards}>
          {visibleSkills.map((skill, index) => (
            <Card key={index} {...skill} />
          ))}
        </div>
      </div>
      <div className={styles.Stepper}>{getSteps()}</div>
    </div>
  );
};

export default Skills;
