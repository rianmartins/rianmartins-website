import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Image}>
        <img src={image} alt={title} width={150} />
      </div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Description}>{description}</div>
    </div>
  );
};

export default Card;
