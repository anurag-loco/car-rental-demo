import type { NextPage } from "next";
import Header from "../components/header";
import SportFilterPanel from "../components/sport-filter-panel";
import LocationData from "../components/location-data";
import CatalogueCar from "../components/catalogue-car";
import FooterCard from "../components/footer-card";
import styles from "./index.module.css";
const HFCategoryCarRent: NextPage = () => {
  return (
    <div className={styles.hfCategoryCarRent}>
      <Header />
      <section className={styles.content}>
        <SportFilterPanel />
        <div className={styles.locationDataParent}>
          <LocationData />
          <CatalogueCar />
        </div>
      </section>
      <FooterCard />
    </div>
  );
};

export default HFCategoryCarRent;
