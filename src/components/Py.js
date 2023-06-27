import React from "react";
import styles from "./CSS/LPage.module.css";
import HomeLink from "./HomeLink";

const Py = (props) => {
  return (
    <div className={styles.py}>
      <main>{props.info.py}</main>
      <HomeLink />
    </div>
  );
};

export default Py;
