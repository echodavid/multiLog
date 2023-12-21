import React from 'react';


const Messages = ({ user }) => {
  return (
    <div className="messages container">
      <h1>Comentarios de {user.username}</h1>
    </div>
  );
};

export default Messages;