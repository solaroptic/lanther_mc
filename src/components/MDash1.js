import React, { useState } from "react";
import styles from "./CSS/Mpage.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const MDash1 = (props) => {
  const [sched, setSched] = useState("");
  const [chiro, setChiro] = useState("");
  const [famGoal, setFamGoal] = useState("");
  const [selfGoal, setSelfGoal] = useState("");
  const [homeMsg, setHomeMsg] = useState("");
  const [nMsg, setNMsg] = useState("");

  // input handler = inputs (5)

  const inputHandler = (event, setter) => {
    setter(event.target.value);
  };

  // Submit Functions (3) Submit Functions (3)
  // props.mData props.kidsData props.nData

  const handleSubmitMEdit = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.mData.id);
    const newFields = {
      selfGoal: selfGoal,
      sched: sched,
      chiro: chiro,
      famGoal: famGoal,
    };
    await updateDoc(editingFile, newFields);
    setChiro("");
    setFamGoal("");
    setSched("");
    setSelfGoal("");
    props.flip();
  };
  const handleSubmitHomeMsg = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.mData.id);
    const newFields = { homeTxt: homeMsg };
    await updateDoc(editingFile, newFields);
    setHomeMsg("");
    props.flip();
  };
  const handleSubmitNMsg = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.nData.id);
    const newFields = { nMsgFromM: nMsg };
    await updateDoc(editingFile, newFields);
    setNMsg("");
    props.flip();
  };

  return (
    <div className={styles.dash1}>
      <div className={styles.inputTitles}>
        Home Banner
        <form onSubmit={handleSubmitHomeMsg}>
          <input
            name="homeMsg"
            placeholder="Home Banner"
            value={homeMsg}
            maxLength={30}
            onChange={(e) => inputHandler(e, setHomeMsg)}
          />
          <button>Save</button>
        </form>
      </div>
      <div className={styles.inputTitles2}>
        N Msg
        <form onSubmit={handleSubmitNMsg}>
          <input
            name="nMsg"
            placeholder="Message for N"
            value={nMsg}
            onChange={(e) => inputHandler(e, setNMsg)}
          />
          <button>Send</button>
        </form>
      </div>
      <div className={styles.inputTitles3}>
        Goals/Sched
        <form onSubmit={handleSubmitMEdit}>
          <input
            name="chiro"
            placeholder="Chiro days"
            value={chiro}
            onChange={(e) => inputHandler(e, setChiro)}
          />
          <input
            name="sched"
            placeholder="Schedule"
            value={sched}
            onChange={(e) => inputHandler(e, setSched)}
          />
          <input
            name="famGoal"
            placeholder="Family Goal"
            value={famGoal}
            onChange={(e) => inputHandler(e, setFamGoal)}
          />
          <input
            name="selfGoal"
            placeholder="Goal for Self"
            value={selfGoal}
            onChange={(e) => inputHandler(e, setSelfGoal)}
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default MDash1;
