import React, { useState, useEffect } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'
import Logged from "./Logged.jsx";

const Mainp = ({ user, setUser, opt }) => {

  const [us, setUs] = useState(user.username);
  console.log(user.username);
  useEffect(() => {
    setUs(user.username);
  }, [user]);
  console.log(opt)
  return (
    <section className="mainp" id={user.id}>
      {(us == "" || us == undefined) ? (
        <Login user={user} setUser={setUser} option={opt} />
      ) : (
        <Logged user={user} setUser={setUser} option={opt.platform} />
      )}
    </section>
  );
};

export default Mainp;