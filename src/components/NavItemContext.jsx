import React from 'react';

const NavItemContext = ({ deleteAccount }) => {
  const handleDelete = () => {
    deleteAccount();
  }

  return (
    <div className="context-menu">
      <a className="delete" href="#edit" onClick={handleDelete}>Eliminar</a>
    </div>
  );
};

export default NavItemContext;