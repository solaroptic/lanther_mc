import { Link } from "react-router-dom";
import React from "react";
import styles from "./CSS/NPage.module.css";
import HomeLink from "./HomeLink";

const NPage = (props) => {
  console.log(props.info);
  return (
    <div className={styles.sub}>
      <HomeLink />
      <Link to="/nctrl" className={styles.ctrlRoom}></Link>
      <div className={styles.topInfoN}>
        <p>{props.info.events}</p>
        <p className={styles.pPad}>{props.info.goal}</p>
      </div>
      <div className={styles.rightInfoN}>
        <p>{props.info.nMsgFromM}</p>
      </div>
      <div className={styles.leftInfoN}>
        <p>{props.info.sched}</p>
      </div>
      <div className={styles.bottomInfoN}>
        <p> Expenses: ${props.info.expenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default NPage;
