import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./launching-soon.module.css";
const LaunchingSoon: NextPage = () => {
  const onButtonRentalClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='formContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.launchingSoon}>
      <div className={styles.wrapper}>
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      </div>
      <section className={styles.detailCar}>
        <div className={styles.detailsWrapper}>
          <div className={styles.carName}>
            <b className={styles.launchingSoonNissan}>
              Launching soon: Nissan GTR
            </b>
            <div className={styles.reviews}>
              <div className={styles.reviewStar}>
                <img
                  className={styles.icActionsStarIcon}
                  alt=""
                  src="/icactionsstar1.svg"
                />
                <img
                  className={styles.icActionsStarIcon}
                  alt=""
                  src="/icactionsstar2.svg"
                />
                <img
                  className={styles.icActionsStarIcon}
                  alt=""
                  src="/icactionsstar3.svg"
                />
                <img
                  className={styles.icActionsStarIcon}
                  alt=""
                  src="/icactionsstar4.svg"
                />
                <img
                  className={styles.icActionsStarIcon}
                  alt=""
                  src="/icactionsstar5.svg"
                />
              </div>
              <div className={styles.reviewer}>440+ Reviewer</div>
            </div>
          </div>
          <img
            className={styles.vuesaxboldheartIcon}
            alt=""
            src="/vuesaxboldheart3.svg"
          />
        </div>
        <div className={styles.nismoHasBecome}>
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </div>
        <div className={styles.specification}>
          <div className={styles.specification1}>
            <div className={styles.type}>
              <div className={styles.typeCar}>Type Car</div>
              <div className={styles.sport}>Sport</div>
            </div>
            <div className={styles.type}>
              <div className={styles.typeCar}>{`Steering `}</div>
              <div className={styles.sport}>Manual</div>
            </div>
          </div>
          <div className={styles.specification1}>
            <div className={styles.type}>
              <div className={styles.typeCar}>Capacity</div>
              <div className={styles.sport}>2 Person</div>
            </div>
            <div className={styles.type}>
              <div className={styles.typeCar}>{`Gasoline `}</div>
              <div className={styles.sport}>70L</div>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <button className={styles.buttonRental} onClick={onButtonRentalClick}>
            <b className={styles.preOrder}>Pre-order NOW!</b>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LaunchingSoon;
