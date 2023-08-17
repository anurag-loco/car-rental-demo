import type { NextPage } from "next";
import styles from "./form.module.css";
const Form: NextPage = () => {
  return (
    <div className={styles.form} data-scroll-to="formContainer">
      <div className={styles.contactUs}>Contact Us</div>
      <form className={styles.form1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.nameParent}>
              <div className={styles.name}>Name</div>
              <input
                className={styles.email}
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className={styles.nameParent}>
              <div className={styles.name}>Email Address</div>
              <input
                className={styles.email}
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className={styles.nameParent}>
              <div className={styles.phoneNumberOptionalContainer}>
                <span className={styles.phoneNumber}>Phone Number</span>
                <span className={styles.optional}> (Optional)</span>
              </div>
              <input
                className={styles.email}
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className={styles.messageParent}>
            <div className={styles.name}>Message</div>
            <textarea
              className={styles.email3}
              placeholder="Enter your message"
            />
          </div>
        </div>
        <button className={styles.searchFlightsButton}>
          <div className={styles.button}>Send message</div>
        </button>
      </form>
    </div>
  );
};

export default Form;
