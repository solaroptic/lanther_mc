import React, { useState } from "react";
import styles from "./CSS/Mpage.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const MDash2 = (props) => {
  const [skyMsg, setSkyMsg] = useState("");
  const [lMsg, setLMsg] = useState("");
  const [bankAdd, setBankAdd] = useState("");
  const [py, setPy] = useState("");

  // input handler   inputs (4)

  const inputHandler = (event, setter) => {
    setter(event.target.value);
  };

  // Submit Functions (3) Submit Functions (3)

  const handleSubmitLMsg = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.kidsData.id);
    const newFields = { skyMsgM: skyMsg, lMsgM: lMsg };
    await updateDoc(editingFile, newFields);
    setLMsg("");
    setSkyMsg("");
    props.flip();
  };
  const handleSubmitBankAdd = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.kidsData.id);
    const newFields = { bank: +props.kidsData.bank + +bankAdd };
    await updateDoc(editingFile, newFields);
    setBankAdd(0);
    props.flip();
  };
  const handleSubmitPy = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.kidsData.id);
    const newFields = { py: py };
    await updateDoc(editingFile, newFields);
    setPy("");
    props.flip();
  };

  return (
    <div className={styles.dash2}>
      <div className={styles.inputTitles}>
        Len-Sky Msg
        <form onSubmit={handleSubmitLMsg}>
          <input
            name="lMsg"
            placeholder="Len Msg"
            value={lMsg}
            onChange={(e) => inputHandler(e, setLMsg)}
          />
          <input
            name="skyMsg"
            placeholder="Sky Msg"
            value={skyMsg}
            onChange={(e) => inputHandler(e, setSkyMsg)}
          />
          <button>Send</button>
        </form>
      </div>
      <div className={styles.inputTitles2}>
        Len Bank
        <form onSubmit={handleSubmitBankAdd}>
          <input
            name="bankAdd"
            placeholder="0"
            value={bankAdd}
            onChange={(e) => inputHandler(e, setBankAdd)}
          />
          <button>Add</button>
        </form>
      </div>
      <div className={styles.inputTitles3}>
        Python
        <form onSubmit={handleSubmitPy}>
          <textarea
            rows="4"
            name="py"
            columns="30"
            placeholder="Python"
            value={py}
            onChange={(e) => inputHandler(e, setPy)}
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default MDash2;
