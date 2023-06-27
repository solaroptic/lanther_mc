import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CSS/LPage.module.css";
import HomeLink from "./HomeLink";
import Timer from "./Timer";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const LPage = (props) => {
  // state
  const [timerPanel, setTimerPanel] = useState(false);
  const [testsDisplay, setTestsDisplay] = useState("");
  // timer Func
  const handleTimer = () => {
    timerPanel ? setTimerPanel(false) : setTimerPanel(true);
  };
  // test input
  const handleChangeTest = (event) => {
    setTestsDisplay(event.target.value);
  };
  const handleSubmitTest = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.info.id);
    const newFields = { tests: testsDisplay };
    await updateDoc(editingFile, newFields);
    setTestsDisplay("");
    props.flip();
  };
  // jsx////////////////////////////////////////////////////////////////
  return (
    <div className={styles.tank}>
      <HomeLink />
      <Link to="/pypage" className={styles.pyLink}></Link>
      <section className={styles.timerPanel} onClick={handleTimer} />
      {timerPanel && <Timer hide={handleTimer} />}
      <form onSubmit={handleSubmitTest} className={styles.testForm}>
        <input
          name="tests"
          placeholder="Tests: class/day"
          value={testsDisplay}
          onChange={handleChangeTest}
        />
        <button>Save</button>
      </form>
      <div className={styles.topInfoL}>
        <p className={styles.pLenInfo}>{props.info.lMsgM}</p>
        <p className={styles.pLenInfo}>{props.info.lMsgN}</p>
      </div>
      <div className={styles.middleInfoL}>
        <p className={styles.pLenInfo}>{props.info.bank.toFixed(2)}</p>
      </div>
      <div className={styles.bottomInfoL}>
        <p className={styles.pLenInfo}>{props.info.tests}</p>
      </div>
    </div>
  );
};

export default LPage;
