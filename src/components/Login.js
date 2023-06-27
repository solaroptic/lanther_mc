import React from "react";
import { useState } from "react";
import styles from "./CSS/Home.module.css";

const Login = ({ auth, wrongID }) => {
  const [idEnter, setIDEnter] = useState("");
  const [isShowBtn, setIsShowBtn] = useState(false);

  return (
    <div className={styles.loginBack}>
      <div className={styles.screenMsg}>MOBILE ONLY</div>
      <p>Classified Access:</p>
      <input
        onClick={() => setIsShowBtn(true)}
        onChange={(e) => setIDEnter(e.target.value)}
        placeholder="Operations ID"
        maxLength={10}
        value={idEnter}
        className={wrongID ? `${styles.wrongID}` : ""}
      />
      {isShowBtn && <button onClick={() => auth(idEnter)}>Enter</button>}
    </div>
  );
};

export default Login;
