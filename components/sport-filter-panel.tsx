import type { NextPage } from "next";
import { Box, Slider } from "@mui/material";
import VuesaxboldtickSquare from "./vuesaxboldtick-square";
import styles from "./sport-filter-panel.module.css";
const SportFilterPanel: NextPage = () => {
  return (
    <div className={styles.filterPanel}>
      <div className={styles.tYPE}>
        <div className={styles.tYP}>T Y P E</div>
        <div className={styles.tYPE1}>
          <div className={styles.sport}>
            <VuesaxboldtickSquare />
            <h3 className={styles.sport10}>
              <span className={styles.sport10TxtContainer}>
                <span>Sport</span>
                <span className={styles.span}> (10)</span>
              </span>
            </h3>
          </div>
          <div className={styles.sport}>
            <VuesaxboldtickSquare />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>SUV</span>
                <span className={styles.span}> (12)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <input className={styles.ceklist} type="checkbox" />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>MPV</span>
                <span className={styles.span}> (16)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <input className={styles.ceklist} type="checkbox" />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>Sedan</span>
                <span className={styles.span}> (20)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <input className={styles.ceklist} type="checkbox" />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>Coupe</span>
                <span className={styles.span}> (14)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <input className={styles.ceklist} type="checkbox" />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>Hatchback</span>
                <span className={styles.span}> (14)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tYPE}>
        <div className={styles.tYP}>C A P A C I T Y</div>
        <div className={styles.tYPE1}>
          <div className={styles.sport}>
            <VuesaxboldtickSquare />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>2 Person</span>
                <span className={styles.span}> (10)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <input className={styles.ceklist} type="checkbox" />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>4 Person</span>
                <span className={styles.span}> (14)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <input className={styles.ceklist} type="checkbox" />
            <div className={styles.person12}>
              <span className={styles.sport10TxtContainer}>
                <span className={styles.person3}>6 Person</span>
                <span className={styles.span8}> (12)</span>
              </span>
            </div>
          </div>
          <div className={styles.sport}>
            <VuesaxboldtickSquare />
            <div className={styles.orMore16Container}>
              <span className={styles.sport10TxtContainer}>
                <span>8 or More</span>
                <span className={styles.span}> (16)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tYPE}>
        <div className={styles.tYP}>P R I C E</div>
        <div className={styles.pRICERANGE}>
          <Box className={styles.pRICERANGE1}>
            <Slider color="primary" orientation="horizontal" />
          </Box>
          <div className={styles.max10000}>Max. $100.00</div>
        </div>
      </div>
    </div>
  );
};

export default SportFilterPanel;
