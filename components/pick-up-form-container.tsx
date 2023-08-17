import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./pick-up-form-container.module.css";

type PickUpFormContainerType = {
  locationLabel?: string;

  /** Style props */
  propJustifyContent?: CSSProperties["justifyContent"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
};

const PickUpFormContainer: NextPage<PickUpFormContainerType> = ({
  locationLabel,
  propJustifyContent,
  propAlignSelf,
  propBackgroundColor,
  propBackgroundColor1,
  propWidth,
}) => {
  const pickUpStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      alignSelf: propAlignSelf,
    };
  }, [propJustifyContent, propAlignSelf]);

  const markStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const mark1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const pickUp1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.pickUp} style={pickUpStyle}>
      <div className={styles.pickUp1}>
        <div className={styles.mark} style={markStyle}>
          <div className={styles.mark1} style={mark1Style} />
        </div>
        <div className={styles.pickUp2} style={pickUp1Style}>
          {locationLabel}
        </div>
      </div>
      <div className={styles.pickUp3}>
        <div className={styles.locations}>
          <b className={styles.locations1}>Locations</b>
          <Autocomplete
            className={styles.locationsChild}
            disablePortal
            options={["LA", "Bay Area", "California"]}
            renderInput={(params: any) => (
              <TextField
                {...params}
                color="primary"
                label="Select your city"
                variant="standard"
                placeholder=""
                helperText=""
              />
            )}
            size="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default PickUpFormContainer;
