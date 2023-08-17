import type { NextPage } from "next";
import PickUpFormContainer from "./pick-up-form-container";
import styles from "./location-data.module.css";
const LocationData: NextPage = () => {
  return (
    <div className={styles.locationData}>
      <PickUpFormContainer locationLabel="Pick - Up" />
      <PickUpFormContainer
        locationLabel="Drop - Off"
        propJustifyContent="flex-start"
        propAlignSelf="stretch"
        propBackgroundColor="rgba(92, 175, 252, 0.3)"
        propBackgroundColor1="#54a6ff"
        propWidth="80px"
      />
    </div>
  );
};

export default LocationData;
