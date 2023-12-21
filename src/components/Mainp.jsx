import React, { useState, useEffect } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'
import Logged from "./Logged.jsx";

const Mainp = ({ user, setUser }) => {
  const [us, setUs] = useState(user.username.username);

  useEffect(() => {
    setUs(user.username.username);
  }, [user.username]);

  return (
    <section className="mainp">
      
      {(us != '' && us != undefined)? (
        <Logged user={user} setUser={setUser}/>
      ) : (
        
        <Login user={user} setUser={setUser} />
        
      )}
    </section>
  );
};

export default Mainp;