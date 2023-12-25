import React, { useState, useEffect } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'
import Logged from "./Logged.jsx";

const Mainp = ({ user, setUser, opt }) => {
  console.log(user)
  console.log(opt)
  const [us, setUs] = useState(
    () => {
      if (user == null) {
        return "";
      }
      return user.username
    }
  )
  console.log(user)
  console.log(opt)
  console.log(user.id)
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