import React from 'react';


const Messages = ({ user }) => {
  return (
    <div className="messages">
      <h1>Comentarios de {user.username.username}</h1>
    </div>
  );
};

export default Messages;