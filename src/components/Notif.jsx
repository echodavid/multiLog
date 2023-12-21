import React from 'react';


const Notif = ({ user }) => {
  return (
    <div className="notif">
      <h1>Notificaciones de { user.username.username }</h1>
    </div>
  );
};

export default Notif;