import React from "react";
import styles from "./CSS/Home.module.css";
import flag from "../images/Flag.png";
import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link to="/" className={styles.homeFit}>
      <img src={flag} className={styles.homeLink} alt="Flag with cat" />
    </Link>
  );
};

export default HomeLink;
