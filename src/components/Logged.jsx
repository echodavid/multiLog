import React from 'react';

import Notif from './Notif.jsx'
import Comments from "./Comments.jsx";
import Messages from "./Messages.jsx";

const Logged = ({ user, setUser }) => {
  return (
    <div className="logged">
      <div className="header">
        <h1>Bienvenido {user.username.username}</h1>
        <button onClick={() => setUser({ username: { username: '' } })}>Cerrar sesión</button>
      </div>
      <div className="content">
        <Notif user={user} />
        <Comments user={user} />
        <Messages user={user} />
      </div>
    </div>
  );
};

export default Logged;