import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./catalog-card.module.css";

type CatalogCardType = {
  koenigsegg?: string;
  sport?: string;
  vuesaxboldheart?: string;
  car?: string;
  vuesaxboldgasStation?: string;
  l?: string;
  car1?: string;
  vuesaxboldprofile2user?: string;
  people?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const CatalogCard: NextPage<CatalogCardType> = ({
  koenigsegg,
  sport,
  vuesaxboldheart,
  car,
  vuesaxboldgasStation,
  l,
  car1,
  vuesaxboldprofile2user,
  people,
  prop,
  propWidth,
  propHeight,
}) => {
  const carIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.catalog1}>
      <div className={styles.carNameParent}>
        <div className={styles.carName}>
          <b className={styles.koenigsegg}>{koenigsegg}</b>
          <b className={styles.sport}>{sport}</b>
        </div>
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src={vuesaxboldheart}
        />
      </div>
      <img className={styles.carIcon} alt="" src={car} style={carIconStyle} />
      <div className={styles.spesification}>
        <div className={styles.gasoline}>
          <img
            className={styles.vuesaxboldheartIcon}
            alt=""
            src={vuesaxboldgasStation}
          />
          <div className={styles.l}>{l}</div>
        </div>
        <div className={styles.gasoline}>
          <img className={styles.carIcon1} alt="" src={car1} />
          <div className={styles.l}>Manual</div>
        </div>
        <div className={styles.capacity}>
          <img
            className={styles.vuesaxboldheartIcon}
            alt=""
            src={vuesaxboldprofile2user}
          />
          <div className={styles.l}>{people}</div>
        </div>
      </div>
      <div className={styles.purchaseWrapper}>
        <div className={styles.price}>
          <b className={styles.day}>
            <span className={styles.dayTxt}>
              <span>{`$99.00/ `}</span>
              <span className={styles.day1}>day</span>
            </span>
          </b>
        </div>
        <button className={styles.buttonRental}>
          <div className={styles.rentNow}>Rent Now</div>
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
