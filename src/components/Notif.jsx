import React from 'react';


const Notif = ({ user }) => {
  return (
    <div className="notif container">
      <h1>Notificaciones de { user.username }</h1>
    </div>
  );
};

export default Notif;