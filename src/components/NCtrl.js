import React, { useState } from "react";
import styles from "./CSS/NPage.module.css";
import HomeLink from "./HomeLink";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const NCtrl = (props) => {
  const [goals, setGoals] = useState("");
  const [sched, setSched] = useState("");
  const [events, setEvents] = useState("");
  const [lMsg, setLMsg] = useState("");
  const [sMsg, setSMsg] = useState("");
  const [addSpend, setAddSpend] = useState(0);

  // input handler - 6 inputs

  const inputHandler = (event, setter) => {
    setter(event.target.value);
  };

  // Submit Functions (3) Submit Functions (3)

  const handleSubmitGoals = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.info.id);
    const newFields = { goal: goals, sched: sched };
    await updateDoc(editingFile, newFields);
    setGoals("");
    setSched("");
    props.flip();
  };
  const handleSubmitEvents = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.info.id);
    const newFields = { events: events };
    await updateDoc(editingFile, newFields);
    setEvents("");
    props.flip();
  };
  const handleSubmitMsgs = async (event) => {
    event.preventDefault();
    // change info name to kids file
    const editingFile = doc(db, "lanther", props.kids.id);
    const newFields = { lMsgN: lMsg, skyMsgN: sMsg };
    await updateDoc(editingFile, newFields);
    setLMsg("");
    setSMsg("");
    props.flip();
  };
  const handleSubmitAddSpend = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.info.id);
    const newFields = { expenses: +props.info.expenses + +addSpend };
    await updateDoc(editingFile, newFields);
    setAddSpend(0);
    props.flip();
  };

  return (
    <div className={styles.subCtrl}>
      <HomeLink />
      <div className={styles.inputTitles}>
        Goals/Schedule
        <form onSubmit={handleSubmitGoals}>
          <input
            name="goals"
            placeholder="Goals"
            value={goals}
            onChange={(e) => inputHandler(e, setGoals)}
          />
          <input
            name="sched"
            placeholder="Schedule"
            value={sched}
            onChange={(e) => inputHandler(e, setSched)}
          />
          <button>Save</button>
        </form>
      </div>
      <div className={styles.inputTitles2}>
        Events for Week
        <form onSubmit={handleSubmitEvents}>
          <input
            name="events"
            placeholder="Events"
            value={events}
            onChange={(e) => inputHandler(e, setEvents)}
          />
          <button>Save</button>
        </form>
      </div>
      <div className={styles.inputTitles3}>
        Daric & Sky Msgs
        <form onSubmit={handleSubmitMsgs}>
          <input
            name="lMsg"
            placeholder="Message for Lenny"
            value={lMsg}
            onChange={(e) => inputHandler(e, setLMsg)}
          />
          <input
            name="sMsg"
            placeholder="Message for Sky"
            value={sMsg}
            onChange={(e) => inputHandler(e, setSMsg)}
          />
          <button>Send</button>
        </form>
      </div>
      <div className={styles.inputTitles4}>
        Add Expense
        <form onSubmit={handleSubmitAddSpend}>
          <input
            name="addSpend"
            placeholder="0"
            value={addSpend}
            onChange={(e) => inputHandler(e, setAddSpend)}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default NCtrl;
