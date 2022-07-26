import React from "react";
import { TIcon } from "../../assets/icons";
import { Icon } from "../Icon";

import styles from "./IconButton.module.css";

type Props = {
  icon: TIcon;
  className?: string;
  onPress?: () => void;
};

export const IconButton: React.FC<Props> = ({ icon, className, onPress }) => {
  return (
    <button className={`${styles.Button} ${className}`} onClick={onPress}>
      <Icon name={icon} color="#9676DB" />
    </button>
  );
};
