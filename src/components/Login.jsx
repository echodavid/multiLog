import React, { useState } from "react";
import '../styles/Login.css'

const Login = ({ username, setUsername, opc }) => {

  const [name, setName] = useState("");
  const [pssword, setPssword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "" || pssword == "") {
      alert("Por favor ingrese usuario y contraseña");
      return;
    }
    console.log(name, pssword);
    setUsername({...username, [opc]:name});
    
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          type="text"
          placeholder="Nombre de usuario"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          value={pssword}
          onChange={
            e => setPssword(e.target.value)
          }
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
    
  );
};

export default Login;