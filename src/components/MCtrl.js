import React, { useState } from "react";
import MDash1 from "./MDash1";
import MDash2 from "./MDash2";
import styles from "./CSS/Mpage.module.css";
import HomeLink from "./HomeLink";

const MCtrl = (props) => {
  const [choiceNum, setChoiceNum] = useState(0);

  const handleChoice = (choice) => {
    choice === 1 ? setChoiceNum(1) : setChoiceNum(2);
  };

  return (
    <div className={styles.editRoom}>
      <HomeLink />
      <section className={styles.choice1} onClick={() => handleChoice(1)} />
      <section className={styles.choice2} onClick={() => handleChoice(2)} />
      {choiceNum === 1 && (
        <MDash1 mData={props.info} nData={props.nInfo} flip={props.flip} />
      )}
      {choiceNum === 2 && <MDash2 kidsData={props.kids} flip={props.flip} />}
    </div>
  );
};

export default MCtrl;
