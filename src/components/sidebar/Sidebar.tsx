import Logo from "../../assets/logo.svg";
import { IconButton } from "../buttons/IconButton";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Logo />

      <div className={styles.Navigation}>
        <IconButton icon="file" className={styles.NavButton} />
        <IconButton icon="folder" className={styles.NavButton} />
        <IconButton icon="save" className={styles.NavButton} />
        <IconButton icon="compass" className={styles.NavButton} />
      </div>

      <IconButton icon="settings" />
    </div>
  );
};
