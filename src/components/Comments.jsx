import React from 'react';


const Comments = ({ user }) => {
  return (
    <div className="comments">
      <h1>Comentarios de {user.username.username}</h1>
    </div>
  );
};

export default Comments;