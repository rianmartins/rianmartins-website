import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  /**
   * Get years of experience from 2014 to now
   * @returns Years of experience
   */
  const getYearsOfExperience = () => {
    const startDate = new Date("2015-01-01");
    const endDate = new Date();
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears;
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LeftSection}>
        <div className={styles.Title}>Hi I'm Rian Martins</div>
        <div className={styles.SubTitle}>
          Computer Engineer & Front-End Developer with more than {getYearsOfExperience()} years of
          experience
        </div>
        <Button onClick={() => {}} className={styles.Button}>
          Contact Me
        </Button>
      </div>
      <div className={styles.RightSection}>
        <img src="/hero-image.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
