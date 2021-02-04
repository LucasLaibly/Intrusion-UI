import styles from "../Lobby/Lobby.module.scss";

export default function Lobby() {
  return (
    <>
      <div className="container color-code">
        <form>
          <div className={styles.formGroup}>
            <label for="uname">Userame</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Desired username.."
            />
          </div>
          <div className={styles.formGroup}>
            <label for="lname">Lobby Number</label>
            <input
              type="number"
              id="lobbynumber"
              name="lobbynumber"
              placeholder="Lobby Number"
            />
          </div>
          <input className={styles.input} type="submit" value="Create Lobby" />
        </form>
        {/**
        The div below get's is style from global styles
         */}
        <div className="imatest">Hi there!</div>
      </div>
      <style jsx>{`
        .color-code {
          background: #c70039;
          min-height: 100vh;
        }
      `}</style>
      );
    </>
  );
}
