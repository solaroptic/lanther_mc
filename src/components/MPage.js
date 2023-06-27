import React from "react";
import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";

import styles from "./CSS/Mpage.module.css";

const MPage = (props) => {
  return (
    <div className={styles.ctrlRoom}>
      <HomeLink />
      <Link to="/mctrl" className={styles.mCtrlRoom}></Link>
      <div className={styles.topInfoM}>
        <p className={styles.mPageInfoP}>{props.info.sched}</p>
        <p className={styles.mPageInfoP}>Chiro: {props.info.chiro}</p>
      </div>
      <div className={styles.middleInfoM}>
        <p className={styles.mPageInfoP}>{props.info.famGoal}</p>
      </div>
      <div className={styles.bottomInfoM}>
        <p className={styles.mPageInfoP}>{props.info.selfGoal}</p>
      </div>
    </div>
  );
};

export default MPage;
