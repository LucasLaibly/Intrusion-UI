import styles from "../Layouts/LobbyLayout.module.scss";

export default function Lobby({ children }) {
  return <div className={styles.container}>{children}</div>;
}
