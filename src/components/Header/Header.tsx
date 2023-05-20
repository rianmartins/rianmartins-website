import React from "react";
import styles from "./Header.module.css";
import MenuItem from "./MenuItem/MenuItem";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="logo" />
      <div className={styles.menuItems}>
        <MenuItem name="Home" />
        <MenuItem name="About" />
        <MenuItem name="Skills" />
        <MenuItem name="Experience" />
        <MenuItem name="Portfolio" />
        <MenuItem name="Contact" />
        <MenuItem name="Blog" />
      </div>
    </div>
  );
};

export default Header;
