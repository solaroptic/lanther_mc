import React from "react";
import { useState } from "react";
import styles from "./CSS/Home.module.css";
// special page systems
import { Link, useNavigate } from "react-router-dom";
import { Blink } from "@bdchauvette/react-blink";
// special assets
import jet from "./assets/jetConsole.png";
import jetSky from "./assets/jetSky.jpg";
import jetClick from "./assets/jetClick.mp3";

const Home = (props) => {
  // for delay effect
  const navigate = useNavigate();
  // state
  const [mGlow, setMGlow] = useState(false);
  const [nGlow, setNGlow] = useState(false);
  const [lGlow, setLGlow] = useState(false);
  const [sGlow, setSGlow] = useState(false);
  // const [need, setNeed] = useState(false);
  const [isHomeXition, setIsHomeXition] = useState(false);
  // vars
  const access = props.access;

  const DelayGo = (e, path, stateID) => {
    e.preventDefault();
    new Audio(jetClick).play();
    setIsHomeXition(true);
    stateID(true);
    setTimeout(() => stateID(false), 70);
    setTimeout(() => navigate(path), 1300);
  };

  return (
    <div className={styles.home}>
      <article>{props.info}</article>
      <div className={styles.screenMsg}>MOBILE ONLY</div>
      <div>
        <img
          src={jetSky}
          alt="Sky at high altitude."
          className={
            !isHomeXition
              ? `${styles.jetSky}`
              : `${styles.jetSky} ${styles.homeXition}`
          }
        />
        <img src={jet} alt="Jet interior" className={styles.jet} />
        {access === "M16" && (
          <Link
            to="/mpage"
            onClick={(e) => DelayGo(e, "/mpage", setMGlow)}
            // className={styles.screenM}
            className={
              !mGlow
                ? `${styles.screenM}`
                : `${styles.screenM} ${styles.screenMG}`
            }
          >
            <Blink>O</Blink>
          </Link>
        )}
        {(access === "M16" || access === "N9") && (
          <Link
            to="/npage"
            onClick={(e) => DelayGo(e, "/npage", setNGlow)}
            className={
              !nGlow
                ? `${styles.screenN}`
                : `${styles.screenN} ${styles.screenNG}`
            }
          ></Link>
        )}{" "}
        {(access === "M16" || access === "N9") && (
          <Link
            to="/grocery"
            onClick={(e) => DelayGo(e, "/grocery", setMGlow)}
            className={styles.groceryBtn}
          ></Link>
        )}
        {(access === "M16" || access === "N9" || access === "D3") && (
          <Link
            to="/lpage"
            onClick={(e) => DelayGo(e, "/lpage", setLGlow)}
            className={
              !lGlow
                ? `${styles.screenL}`
                : `${styles.screenL} ${styles.screenLG}`
            }
          ></Link>
        )}
        {(access === "M16" ||
          access === "N9" ||
          access === "D3" ||
          access === "S1") && (
          <Link
            to="/spage"
            onClick={(e) => DelayGo(e, "/spage", setSGlow)}
            className={
              !sGlow
                ? `${styles.screenS}`
                : `${styles.screenS} ${styles.screenSG}`
            }
          ></Link>
        )}
      </div>
    </div>
  );
};

export default Home;
