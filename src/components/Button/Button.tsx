import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <div className={cn(styles.Container, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
