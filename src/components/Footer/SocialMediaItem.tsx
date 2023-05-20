import React from "react";
import styles from "./Footer.module.css";

type SocialMediaItemProps = {
  name: string;
  icon: string;
};

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ name, icon }) => {
  return (
    <div className={styles.SocialMediaItem}>
      {name}
      <img src={icon} alt={name} width={24} height={24} />
    </div>
  );
};

export default SocialMediaItem;
