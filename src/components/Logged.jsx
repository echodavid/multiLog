import React from 'react';

import Notif from './Notif.jsx'
import Comments from "./Comments.jsx";
import Messages from "./Messages.jsx";
import '../styles/Logged.css'

const Logged = ({ user, setUser, option }) => {
  return (
    <div className="logged">
      <div className="header">
        <h1>Bienvenido {user.username}</h1>
        <button onClick={() => setUser('', '')}>Cerrar sesión</button>
      </div>
      <div className="content">
        <div className="column-1">
          <Notif user={user} />
        </div>
        <Messages user={user} option={option} />
      </div>
    </div>
  );
};

export default Logged;