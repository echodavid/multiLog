import React, { useState, useEffect } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'
import Logged from "./Logged.jsx";

const Mainp = ({ user, setUser, opt }) => {
  const [us, setUs] = useState(user.username);
  let option = "";
  useEffect(() => {
    setUs(user.username);
  }, [user.username]);
  switch (opt) {
    case "fb":
      option = "facebook";
      break;
    case "ig":
      option = "instagram";
      break;
    case "tw":
      option = "x";
      break;
    default:
      option = "facebook";
      break;
  }

  return (
    <section className="mainp">
      {us !== "" && us !== undefined ? (
        <Logged user={user} setUser={setUser} option={option} />
      ) : (
        <Login user={user} setUser={setUser} option={option} />
      )}
    </section>
  );
};

export default Mainp;