import React, { useState, useEffect } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'
import Logged from "./Logged.jsx";

const Mainp = ({ user, setUser, opt }) => {
  const [us, setUs] = useState(user.username);
  
  useEffect(() => {
    setUs(user.username);
  }, [user.username]);

  return (
    <section className="mainp" id={user.id}>
      {us !== "" && us !== undefined ? (
        <Logged user={user} setUser={setUser} option={opt} />
      ) : (
        <Login user={user} setUser={setUser} option={opt} />
      )}
    </section>
  );
};

export default Mainp;