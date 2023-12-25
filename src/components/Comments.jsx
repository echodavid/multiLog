import React from 'react';
//import './Comments.css'; // Importa el archivo de estilos CSS

const Comments = ({ user }) => {
  return (
    <div className="comments container">
      <h1>Crea una publicación {user.username}</h1>
      <form>
        <textarea className="input-text" placeholder="Escribe tu publicación"></textarea>
        <input type="file" className="input-file" accept="image/*" />
        <button className="submit-button">Publicar</button>
      </form>
    </div>
  );
};

export default Comments;