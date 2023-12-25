import React, { useState, useEffect } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'
import Logged from "./Logged.jsx";

const Mainp = ({ user, setUser, opt }) => {
  const [us, setUs] = useState(
    () => {
      if (user == null) {
        return "";
      }
      return user.username
    }
  )
  useEffect(() => {
    setUs(user.username);
  }, [user]);
  return (
    <section className="mainp" id={user.id}>
      {(us == "" || us == undefined) ? (
        <Login setUser={setUser} option={opt} />
      ) : (
        <Logged user={user} setUser={setUser} option={opt.platform} />
      )}
    </section>
  );
};

export default Mainp;