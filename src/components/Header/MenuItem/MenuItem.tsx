import React from "react";
import styles from "./MenuItem.module.css";

type MenuItemProps = { name: string };

const MenuItem: React.FC<MenuItemProps> = ({ name }) => {
  return <div className={styles.item}>{name}</div>;
};

export default MenuItem;
