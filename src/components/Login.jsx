import React, { useState, useEffect } from "react";
import '../styles/Login.css'
import axios from 'axios'

const Login = ({setUser, option }) => {

  const url = "http://127.0.0.1:5002/";

  const [name, setName] = useState("");
  const [pssword, setPssword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || pssword === "") {
      alert("Por favor ingrese usuario y contraseña");
      return;
    }
    let username = name;
    let password = pssword;
    try {
      const response = await axios.get(`${url}${option}?email=${username}&passwd=${password}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log(response.data);
      let notifications = response.data;
      if (response.status === 200) {
        setUser(username, password, notifications);
      } else {
        alert("Error al iniciar sesión");
      }
    } catch (error) {
      // Manejar errores de red
      alert("Error de conexión");
    }
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <p>Inicia sesión en {option}</p>
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
          onChange={e => setPssword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
};

export default Login;