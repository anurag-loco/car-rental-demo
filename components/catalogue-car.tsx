import type { NextPage } from "next";
import CatalogCard from "./catalog-card";
import styles from "./catalogue-car.module.css";
const CatalogueCar: NextPage = () => {
  return (
    <div className={styles.catalogueCar}>
      <div className={styles.catalogue1}>
        <CatalogCard
          koenigsegg="Koenigsegg"
          sport="Sport"
          vuesaxboldheart="/vuesaxboldheart3.svg"
          car="/car@2x.png"
          vuesaxboldgasStation="/vuesaxboldgasstation1.svg"
          l="90L"
          car1="/car1.svg"
          vuesaxboldprofile2user="/vuesaxboldprofile2user1.svg"
          people="2 People"
        />
        <CatalogCard
          koenigsegg="Nissan GT - R"
          sport="Sport"
          vuesaxboldheart="/vuesaxlinearheart1.svg"
          car="/car2@2x.png"
          vuesaxboldgasStation="/vuesaxboldgasstation1.svg"
          l="80L"
          car1="/car1.svg"
          vuesaxboldprofile2user="/vuesaxboldprofile2user1.svg"
          people="2 People"
          propWidth="228px"
          propHeight="72px"
        />
        <div className={styles.catalog6}>
          <div className={styles.carNameParent}>
            <div className={styles.carName}>
              <b className={styles.nissanGt}>Nissan GT - R</b>
              <b className={styles.sport}>Sport</b>
            </div>
            <img
              className={styles.vuesaxlinearheartIcon}
              alt=""
              src="/vuesaxlinearheart1.svg"
            />
          </div>
          <img className={styles.carIcon} alt="" src="/car3@2x.png" />
          <nav className={styles.spesification}>
            <div className={styles.gasoline}>
              <img
                className={styles.vuesaxlinearheartIcon}
                alt=""
                src="/vuesaxboldgasstation1.svg"
              />
              <div className={styles.l}>70L</div>
            </div>
            <div className={styles.gasoline}>
              <img className={styles.carIcon1} alt="" src="/car1.svg" />
              <div className={styles.l}>Manual</div>
            </div>
            <div className={styles.capacity}>
              <img
                className={styles.vuesaxlinearheartIcon}
                alt=""
                src="/vuesaxboldprofile2user2.svg"
              />
              <div className={styles.l}>4 People</div>
            </div>
          </nav>
          <div className={styles.purchaseWrapper}>
            <div className={styles.price}>
              <b className={styles.day}>
                <span className={styles.dayTxt}>
                  <span>{`$96.00/ `}</span>
                  <span className={styles.day1}>day</span>
                </span>
              </b>
            </div>
            <button className={styles.buttonRental}>
              <div className={styles.rentNow}>Rent Now</div>
            </button>
          </div>
        </div>
        <CatalogCard
          koenigsegg="All New Rush"
          sport="SUV"
          vuesaxboldheart="/vuesaxlinearheart2.svg"
          car="/car4@2x.png"
          vuesaxboldgasStation="/vuesaxboldgasstation2.svg"
          l="70L"
          car1="/car5.svg"
          vuesaxboldprofile2user="/vuesaxboldprofile2user3.svg"
          people="6 People"
          propWidth="252px"
          propHeight="112px"
        />
        <CatalogCard
          koenigsegg="CR-V"
          sport="SUV"
          vuesaxboldheart="/vuesaxlinearheart2.svg"
          car="/car6@2x.png"
          vuesaxboldgasStation="/vuesaxboldgasstation2.svg"
          l="85L"
          car1="/car5.svg"
          vuesaxboldprofile2user="/vuesaxboldprofile2user3.svg"
          people="6 People"
          propWidth="254px"
          propHeight="102px"
        />
        <CatalogCard
          koenigsegg="All New Terios"
          sport="SUV"
          vuesaxboldheart="/vuesaxlinearheart2.svg"
          car="/car7@2x.png"
          vuesaxboldgasStation="/vuesaxboldgasstation1.svg"
          l="90L"
          car1="/car1.svg"
          vuesaxboldprofile2user="/vuesaxboldprofile2user4.svg"
          people="6 People"
          propWidth="252px"
          propHeight="112px"
        />
      </div>
    </div>
  );
};

export default CatalogueCar;
