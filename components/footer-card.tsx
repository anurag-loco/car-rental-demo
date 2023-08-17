import type { NextPage } from "next";
import styles from "./footer-card.module.css";
const FooterCard: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <b className={styles.logo1}>MORENT</b>
          <div className={styles.ourVisionIs}>
            Our vision is to provide convenience and help increase your sales
            business.
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.howItWorksContainer}>
            <span className={styles.howItWorksContainer1}>
              <p className={styles.howItWorks}>How it works</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Featured</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Partnership</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Bussiness Relation</p>
            </span>
          </div>
          <div className={styles.about1}>About</div>
        </div>
        <div className={styles.about}>
          <div className={styles.howItWorksContainer}>
            <span className={styles.howItWorksContainer1}>
              <p className={styles.howItWorks}>Events</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Blog</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Podcast</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Invite a friend</p>
            </span>
          </div>
          <div className={styles.about1}>Community</div>
        </div>
        <div className={styles.about}>
          <div className={styles.howItWorksContainer}>
            <span className={styles.howItWorksContainer1}>
              <p className={styles.howItWorks}>Discord</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Instagram</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Twitter</p>
              <p className={styles.howItWorks}>&nbsp;</p>
              <p className={styles.howItWorks}>Facebook</p>
            </span>
          </div>
          <div className={styles.about1}>Socials</div>
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.morentAllRights}>
          ©2022 MORENT. All rights reserved
        </div>
        <div className={styles.privacyPolicy}>{`Privacy & Policy`}</div>
        <div className={styles.privacyPolicy}>{`Terms & Condition`}</div>
      </div>
    </footer>
  );
};

export default FooterCard;
