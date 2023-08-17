import type { NextPage } from "next";
import styles from "./header.module.css";
const Header: NextPage = () => {
  return (
    <header className={styles.navBarTop}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>MORENT</h1>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={styles.profilNotification}>
        <div className={styles.like}>
          <div className={styles.button} />
          <img
            className={styles.vuesaxboldheartIcon}
            alt=""
            src="/vuesaxboldheart2.svg"
          />
        </div>
        <div className={styles.like}>
          <div className={styles.button} />
          <img
            className={styles.vuesaxboldheartIcon}
            alt=""
            src="/vuesaxboldnotification1.svg"
          />
          <div className={styles.notif} />
        </div>
        <div className={styles.settings}>
          <div className={styles.button} />
          <img
            className={styles.vuesaxboldheartIcon}
            alt=""
            src="/vuesaxboldsetting21.svg"
          />
        </div>
        <div className={styles.profil}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
