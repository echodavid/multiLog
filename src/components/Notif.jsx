import React from 'react';
import '../styles/Notif.css';

const Notif = ({ user }) => {
  console.log(user.notifications);
  return (
    <div className="notif container" style={{ maxHeight: '90vh', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Notificaciones de {user.username}</h1>
      <div style={{ flex: '1', overflow: 'auto' }}>
        {user.notifications.length > 0 ? (
          user.notifications.map((notification, index) => (
            <div key={index} className="fb-notification">
              <div className="notification-container">
                <p>{notification}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay notificaciones</p>
        )}
      </div>
    </div>
  );
};

export default Notif;
