import styles from './lobby.module.css'

export default function Lobby({ children }) {
    return <div className={styles.container}>{children}</div>
}