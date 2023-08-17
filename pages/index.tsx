import type { NextPage } from "next";
import { Box, Slider, Autocomplete, TextField } from "@mui/material";
import styles from "./index.module.css";
const HFCategoryCarRent: NextPage = () => {
  return (
    <div className={styles.hfCategoryCarRent}>
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
      <section className={styles.content}>
        <div className={styles.filterPanel}>
          <div className={styles.tYPE}>
            <div className={styles.tYP}>T Y P E</div>
            <div className={styles.tYPE1}>
              <div className={styles.sport}>
                <input
                  className={styles.vuesaxboldtickSquare}
                  type="checkbox"
                  defaultChecked={true}
                />
                <h3 className={styles.sport10}>
                  <span className={styles.sport10TxtContainer}>
                    <span>Sport</span>
                    <span className={styles.span}> (10)</span>
                  </span>
                </h3>
              </div>
              <div className={styles.sport}>
                <input
                  className={styles.vuesaxboldtickSquare}
                  type="checkbox"
                  defaultChecked={true}
                />
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
                <input
                  className={styles.vuesaxboldtickSquare}
                  type="checkbox"
                  defaultChecked={true}
                />
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
                <input
                  className={styles.vuesaxboldtickSquare}
                  type="checkbox"
                  defaultChecked={true}
                />
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
        <div className={styles.locationDataParent}>
          <div className={styles.locationData}>
            <div className={styles.pickUp}>
              <div className={styles.pickUp1}>
                <div className={styles.mark}>
                  <div className={styles.mark1} />
                </div>
                <div className={styles.pickUp2}>Pick - Up</div>
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
            <div className={styles.dropOff}>
              <div className={styles.pickUp1}>
                <div className={styles.mark2}>
                  <div className={styles.mark3} />
                </div>
                <div className={styles.dropOff2}>Drop - Off</div>
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
          </div>
          <div className={styles.catalogueCar}>
            <div className={styles.catalogue1}>
              <div className={styles.catalog1}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.koenigsegg}>Koenigsegg</b>
                    <b className={styles.sport1}>Sport</b>
                  </div>
                  <img
                    className={styles.vuesaxboldgasStationIcon}
                    alt=""
                    src="/vuesaxboldheart3.svg"
                  />
                </div>
                <img className={styles.carIcon} alt="" src="/car@2x.png" />
                <div className={styles.spesification}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldgasstation1.svg"
                    />
                    <div className={styles.l}>90L</div>
                  </div>
                  <div className={styles.gasoline}>
                    <img className={styles.carIcon1} alt="" src="/car1.svg" />
                    <div className={styles.l}>Manual</div>
                  </div>
                  <div className={styles.capacity}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldprofile2user1.svg"
                    />
                    <div className={styles.l}>2 People</div>
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
              <div className={styles.catalog1}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.koenigsegg}>Nissan GT - R</b>
                    <b className={styles.sport1}>Sport</b>
                  </div>
                  <img
                    className={styles.vuesaxboldgasStationIcon}
                    alt=""
                    src="/vuesaxlinearheart1.svg"
                  />
                </div>
                <img className={styles.carIcon2} alt="" src="/car2@2x.png" />
                <div className={styles.spesification}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldgasstation1.svg"
                    />
                    <div className={styles.l}>80L</div>
                  </div>
                  <div className={styles.gasoline}>
                    <img className={styles.carIcon1} alt="" src="/car1.svg" />
                    <div className={styles.l}>Manual</div>
                  </div>
                  <div className={styles.capacity}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldprofile2user1.svg"
                    />
                    <div className={styles.l}>2 People</div>
                  </div>
                </div>
                <div className={styles.purchaseWrapper}>
                  <div className={styles.price}>
                    <b className={styles.day}>
                      <span className={styles.dayTxt}>
                        <span>{`$89.00/ `}</span>
                        <span className={styles.day1}>day</span>
                      </span>
                    </b>
                  </div>
                  <button className={styles.buttonRental}>
                    <div className={styles.rentNow}>Rent Now</div>
                  </button>
                </div>
              </div>
              <div className={styles.catalog1}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.koenigsegg}>Nissan GT - R</b>
                    <b className={styles.sport1}>Sport</b>
                  </div>
                  <img
                    className={styles.vuesaxboldgasStationIcon}
                    alt=""
                    src="/vuesaxlinearheart1.svg"
                  />
                </div>
                <img className={styles.carIcon4} alt="" src="/car3@2x.png" />
                <nav className={styles.spesification2}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
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
                      className={styles.vuesaxboldgasStationIcon}
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
              <div className={styles.catalog1}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.koenigsegg}>All New Rush</b>
                    <b className={styles.sport1}>SUV</b>
                  </div>
                  <img
                    className={styles.vuesaxboldgasStationIcon}
                    alt=""
                    src="/vuesaxlinearheart2.svg"
                  />
                </div>
                <img className={styles.carIcon6} alt="" src="/car4@2x.png" />
                <div className={styles.spesification}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldgasstation2.svg"
                    />
                    <div className={styles.l}>70L</div>
                  </div>
                  <div className={styles.gasoline}>
                    <img className={styles.carIcon1} alt="" src="/car5.svg" />
                    <div className={styles.l}>Manual</div>
                  </div>
                  <div className={styles.capacity}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldprofile2user3.svg"
                    />
                    <div className={styles.l}>6 People</div>
                  </div>
                </div>
                <div className={styles.purchaseWrapper}>
                  <div className={styles.price}>
                    <b className={styles.day}>
                      <span className={styles.dayTxt}>
                        <span>{`$72.00/ `}</span>
                        <span className={styles.day1}>day</span>
                      </span>
                    </b>
                  </div>
                  <button className={styles.buttonRental}>
                    <div className={styles.rentNow}>Rent Now</div>
                  </button>
                </div>
              </div>
              <div className={styles.catalog1}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.koenigsegg}>CR-V</b>
                    <b className={styles.sport1}>SUV</b>
                  </div>
                  <img
                    className={styles.vuesaxboldgasStationIcon}
                    alt=""
                    src="/vuesaxlinearheart2.svg"
                  />
                </div>
                <img className={styles.carIcon8} alt="" src="/car6@2x.png" />
                <div className={styles.spesification}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldgasstation2.svg"
                    />
                    <div className={styles.l}>85L</div>
                  </div>
                  <div className={styles.gasoline}>
                    <img className={styles.carIcon1} alt="" src="/car5.svg" />
                    <div className={styles.l}>Manual</div>
                  </div>
                  <div className={styles.capacity}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldprofile2user3.svg"
                    />
                    <div className={styles.l}>6 People</div>
                  </div>
                </div>
                <div className={styles.purchaseWrapper}>
                  <div className={styles.price}>
                    <b className={styles.day}>
                      <span className={styles.dayTxt}>
                        <span>{`$80.00/ `}</span>
                        <span className={styles.day1}>day</span>
                      </span>
                    </b>
                  </div>
                  <button className={styles.buttonRental}>
                    <div className={styles.rentNow}>Rent Now</div>
                  </button>
                </div>
              </div>
              <div className={styles.catalog1}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.koenigsegg}>All New Terios</b>
                    <b className={styles.sport1}>SUV</b>
                  </div>
                  <img
                    className={styles.vuesaxboldgasStationIcon}
                    alt=""
                    src="/vuesaxlinearheart2.svg"
                  />
                </div>
                <img className={styles.carIcon6} alt="" src="/car7@2x.png" />
                <div className={styles.spesification}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldgasstation1.svg"
                    />
                    <div className={styles.l}>90L</div>
                  </div>
                  <div className={styles.gasoline}>
                    <img className={styles.carIcon1} alt="" src="/car1.svg" />
                    <div className={styles.l}>Manual</div>
                  </div>
                  <div className={styles.capacity}>
                    <img
                      className={styles.vuesaxboldgasStationIcon}
                      alt=""
                      src="/vuesaxboldprofile2user4.svg"
                    />
                    <div className={styles.l}>6 People</div>
                  </div>
                </div>
                <div className={styles.purchaseWrapper}>
                  <div className={styles.price}>
                    <b className={styles.day}>
                      <span className={styles.dayTxt}>
                        <span>{`$74.00/ `}</span>
                        <span className={styles.day1}>day</span>
                      </span>
                    </b>
                  </div>
                  <button className={styles.buttonRental}>
                    <div className={styles.rentNow}>Rent Now</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <div className={styles.logo1}>
            <b className={styles.logo2}>MORENT</b>
            <div className={styles.ourVisionIs}>
              Our vision is to provide convenience and help increase your sales
              business.
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.howItWorksContainer}>
              <span className={styles.dayTxt}>
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
              <span className={styles.dayTxt}>
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
              <span className={styles.dayTxt}>
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
    </div>
  );
};

export default HFCategoryCarRent;
