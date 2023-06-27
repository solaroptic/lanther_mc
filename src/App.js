// import styles from "./components/Home.module.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LPage from "./components/LPage";
import Py from "./components/Py";
import MPage from "./components/MPage";
import MCtrl from "./components/MCtrl";
import NPage from "./components/NPage";
import NCtrl from "./components/NCtrl";
import SPage from "./components/SPage";
import Grocery from "./components/Grocery";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Login from "./components/Login";

const App = () => {
  const [mLog, setMlog] = useState(false);
  const [nLog, setNlog] = useState(false);
  const [kidLog, setKidlog] = useState(false);
  const [isAccessDenied, setAccessDenied] = useState(false);
  const [homeAccessID, setHomeAccessID] = useState("");
  const [lantherData, setLantherData] = useState([]);
  const [flipSwitch, setFlipSwitch] = useState(false);
  const lantherCollectionRef = collection(db, "lanther");

  const flip = () => {
    setFlipSwitch(!flipSwitch);
  };

  useEffect(() => {
    const getLantherInfo = async () => {
      const data = await getDocs(lantherCollectionRef);
      console.log(data);
      setLantherData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getLantherInfo();
  }, [flipSwitch]);
  // loggin in//////////////////////////////
  const userAuth = (code) => {
    setHomeAccessID(code);
    if (code === "M16") {
      setMlog(true);
    }
    if (code === "N9") {
      setNlog(true);
    }
    if (code === "S1") {
      setNlog(true);
    }
    if (code === "D3") {
      setKidlog(true);
    } else {
      setAccessDenied(true);
    }
  };
  // console.log(lantherData[0]);
  // lantherData[0] is kids [1] is M, [2] is N
  // info={lantherData[1].homeTxt}
  return (
    <>
      {!mLog && !nLog && !kidLog && (
        <Login auth={userAuth} wrongID={isAccessDenied} />
      )}
      {(mLog || nLog || kidLog) && lantherData && (
        <Routes>
          {lantherData[1] && (
            <Route
              path="/"
              element={
                <Home info={lantherData[1].homeTxt} access={homeAccessID} />
              }
            />
          )}
          <Route path="/mpage" element={<MPage info={lantherData[1]} />} />
          <Route
            path="/mctrl"
            element={
              <MCtrl
                info={lantherData[1]}
                kids={lantherData[0]}
                nInfo={lantherData[2]}
                flip={flip}
              />
            }
          />
          <Route path="/npage" element={<NPage info={lantherData[2]} />} />
          <Route
            path="/nctrl"
            element={
              <NCtrl info={lantherData[2]} kids={lantherData[0]} flip={flip} />
            }
          />
          <Route
            path="/lpage"
            element={
              <LPage
                info={lantherData[0]}
                collRef={lantherCollectionRef}
                flip={flip}
              />
            }
          />
          <Route path="/pypage" element={<Py info={lantherData[0]} />} />
          <Route path="/spage" element={<SPage info={lantherData[0]} />} />
          <Route
            path="/grocery"
            element={<Grocery info={lantherData[3]} flip={flip} />}
          />
        </Routes>
      )}
    </>
  );
};

export default App;

// lanther.pickup.groceries
