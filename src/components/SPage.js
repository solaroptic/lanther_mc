import React from "react";
import styles from "./CSS/SPage.module.css";
import HomeLink from "./HomeLink";

const SPage = (props) => {
  return (
    <div className={styles.b2}>
      <HomeLink />
      <div className={styles.topInfoS}>
        <p className={styles.pSInfo}>{props.info.skyMsgM}</p>
      </div>
      <div className={styles.middleInfoS}>
        <p className={styles.pSInfo}>{props.info.skyMsgN}</p>
      </div>
      <div className={styles.bottomInfoS}>
        <p className={styles.pSInfo2}>Guidelines:</p>
        <p className={styles.pSInfo2}>
          Validate and label emotions; you're feeling X because Y.
        </p>
        <p className={styles.pSInfo2}>
          Age 4: sharing. Choices but limited. Praise defeat. Ask about others'
          anger/feelings.
        </p>
        <p className={styles.pSInfo2}>
          Organize(critical), routines, regulating, define boundaries
          (regularly) and balancing.
        </p>
      </div>
    </div>
  );
};

export default SPage;
