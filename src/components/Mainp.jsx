import React, { useState } from "react";

import Login from './Login.jsx'
import '../styles/Mainp.css'

const Mainp = ({ username, setUsername, opc }) => {
  let user = username[opc];
  console.log(user);
  return (
    <section className="mainp">
      
      {(user != '' && user != undefined)? (
        <h1>Bienvenido  </h1>
        
      ) : (
        
        <Login username={username} setUsername={setUsername} opc={opc} />
        
      )}
    </section>
  );
};

export default Mainp;