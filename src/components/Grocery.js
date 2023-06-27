import React, { useState } from "react";
import styles from "./CSS/Grocery.module.css";
import HomeLink from "./HomeLink";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const Grocery = (props) => {
  // const [list, setList] = useState("Nothing");
  const [items, setItems] = useState("");
  const groceries = [...props.info.groceries];

  const inputHandler = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.info.id);
    const newFields = {
      groceries: [...groceries, items],
    };
    await updateDoc(editingFile, newFields);
    setItems("");
    props.flip();
  };
  const handleClear = async (event) => {
    event.preventDefault();
    const editingFile = doc(db, "lanther", props.info.id);
    const newFields = {
      groceries: [],
    };
    await updateDoc(editingFile, newFields);
    setItems("");
    props.flip();
  };

  return (
    <div className={styles.grocery}>
      <HomeLink />
      {
        <div className={styles.listContain}>
          {groceries.map((item) => {
            return (
              <p
                key={Math.round(Math.random() * 9999)}
                className={styles.items}
              >
                {item}
              </p>
            );
          })}
        </div>
      }
      <form onSubmit={handleSubmit}>
        <input
          name="items"
          placeholder="Waffles"
          value={items}
          maxLength={30}
          onChange={(e) => inputHandler(e, setItems)}
          className={styles.inputItems}
        />
        <button className={styles.addBtn} onClick={handleSubmit}>
          Add
        </button>
      </form>
      <button className={styles.clearBtn} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default Grocery;
