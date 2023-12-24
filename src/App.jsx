
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Mainp from "./components/Mainp.jsx"; 

function App() {
  
  const initAccounts = () => {
    
    let first = [{
      id: 0,
      platform: "",
      username: "",
      password: "",
      notifications: [],
    }];
    localStorage.setItem("accounts", JSON.stringify(first));
    console.log(JSON.parse(localStorage.getItem("accounts")))
  }

  const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("accounts")), []
  )
  useEffect(() => {
    // Solo guardar el estado de user en localStorage si user no es undefined o null
    localStorage.setItem('accounts', JSON.stringify(user));
  }, [user]);
  console.log(localStorage.getItem('accounts'))




  const [empty, setEmpty] = useState(true);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("accounts")) == null) {
      setEmpty(true);
    } else{
      setEmpty(false);
  }}, [user])

  //initAccounts()

  
  console.log(JSON.parse(localStorage.getItem("accounts")));
  

  const [option, setOption] = useState({
    id: 0,
    platform: "",
  });

  const handleNavbarClick = (opt) => {
    setOption(opt);
  };

  
  const [profiles, setProfiles] = useState(
    () => {
      if(user == null){
        return []
      }
      return(
        user.map((account) => {
          return{
            id: account.id,
            platform: account.platform,
          }
        }
    ))
  }
)

  console.log(profiles)



  const clear = () => {
    localStorage.clear();
    setUser([]);
  }
  //clear()

  //agregar nueva cuente
  const pushAccount = (idd, platform) => {
    console.log(platform)
    const newAccount = {
      id: idd,
      platform: platform,
      username: "",
      password: "",
      notifications: [],
    };
    console.log(newAccount)

    const updatedAccounts = [
      ...user,
      newAccount,
    ];
    console.log(updatedAccounts)
    // Actualizar el estado de user
    setUser(updatedAccounts);
    console.log(user)
  }
  const deleteAccount = (id) => {
    const updatedAccounts = user.filter((account) => account.id !== id);
    setUser(updatedAccounts);
    if(id == option.id){
      if (profiles.length == 0) {
        setOption({
          id: 0,
          platform: "",
        });
      } else{
        console.log(profiles.length)
        setOption({
          id: profiles[profiles.length-1].id,
          platform: profiles[profiles.length-1].platform,
        });
      }
    }
  }

  


  

  console.log(profiles)
  useEffect(() => {
    setProfiles(
      user.map((account) => {
        return {
          id: account.id,
          platform: account.platform,
        }
      })
    )
  }, [user])
  

  


    const handleChangeUser = (id, username, password, notifications) => {



      //conocer el indice del usuario
      console.log(id)
      const index = user.findIndex((user) => user.id == id)
      console.log(index)
      const newUser = [...user];
      console.log(newUser)
      newUser[index] = {
        id: id,
        platform: option.platform,
        username: username,
        password: password,
        notifications: notifications,
      };
      console.log(newUser)
      setUser(newUser);
    };
  
  
  
  const index = () => {
    if(user == null){
      return 0
    }
    return(
      user.findIndex((user) => user.id == option.id))
  }
  return (
      <div className="main">
        {
          empty ? (
            <div className="empty">
              <h1>No hay cuentas</h1>
              <p>Por favor agrega una nueva cuenta</p>
            </div>
          ) : (
            <>
            <Navbar handleNavbarClick={handleNavbarClick} selectedOption={option} pushAccount={pushAccount} deleteAccount={deleteAccount} profiles={profiles}/>
            <Mainp user={user[user.findIndex((user) => user.id == option.id)]} setUser={handleChangeUser} opt={option}/>
            </>
            )
        }
        
      </div>
  )
}

export default App;
