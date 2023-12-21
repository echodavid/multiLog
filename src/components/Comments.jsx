import React from 'react';


const Comments = ({ user }) => {
  return (
    <div className="comments container">
      <h1>Comentarios de {user.username}</h1>
    </div>
  );
};

export default Comments;