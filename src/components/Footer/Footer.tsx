import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import SocialMediaItem from "./SocialMediaItem";
import Link from "next/link";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.LeftSection}>
        <div className={styles.Title}>Available for mentoring</div>
        <Link href="mailto:rianlopes@hotmail.com">rianlopes@hotmail.com</Link>
      </div>
      <div className={styles.RightSection}>
        <div className={styles.Title}>Find me on social media</div>
        <div className={styles.SocialMedia}>
          <SocialMediaItem name="LinkedIn" icon="/logo-linkedin.png" />
          <SocialMediaItem name="Github" icon="/logo-github.png" />
          <SocialMediaItem name="Instagram" icon="/logo-instagram.png" />
          <SocialMediaItem name="Telegram" icon="/logo-telegram.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
