import type { NextPage } from "next";
import styles from "./vuesaxboldtick-square.module.css";
const VuesaxboldtickSquare: NextPage = () => {
  return (
    <input
      className={styles.vuesaxboldtickSquare}
      type="checkbox"
      defaultChecked={true}
    />
  );
};

export default VuesaxboldtickSquare;
