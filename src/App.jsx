
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Mainp from "./components/Mainp.jsx"; 

function App() {
  
  const initAccounts = () => {
    let first = [{
      id: 0,
      platform: "Facebook",
      username: "jose",
      password: "123",
      notifications: [],
    },
    {
      id: 1,
      platform: "Instagram",
      username: "jose",
      password: "123",
      notifications: [],
    },
    {
      id: 2,
      platform: "Twitter",
      username: "jose",
      password: "123",
      notifications: [],
    }];
    localStorage.setItem("accounts", JSON.stringify(first));
    console.log(JSON.parse(localStorage.getItem("accounts")))
  }
  //initAccounts()

  
  console.log(JSON.parse(localStorage.getItem("accounts")));
  
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem("accounts")).length)
  console.log(total)

  const [option, setOption] = useState({
    id: 0,
    platform: "Facebook",
  });

  const handleNavbarClick = (opt) => {
    setOption(opt);
  };

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("accounts")),
  )
  const [profiles, setProfiles] = useState(
    user.map((account) => {
      return {
        id: account.id,
        platform: account.platform,
      }
    })
  )

  console.log(user)



  const clear = () => {
    localStorage.clear();
    setUser([]);
  }
  //clear()

  //agregar nueva cuente
  const pushAccount = (platform) => {
    console.log(platform)

    const newAccount = {
      id: Math.random().toString(36).substring(7),
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

  useEffect(() => {
    // Solo guardar el estado de user en localStorage si user no es undefined o null
    localStorage.setItem('accounts', JSON.stringify(user));
  }, [user]);
  console.log(localStorage.getItem('accounts'))


  

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
  console.log(total)
  

  


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
  
  
  
  const index = user.findIndex((user) => user.id == option.id);
  return (
      <div className="main">
        <Navbar handleNavbarClick={handleNavbarClick} selectedOption={option} pushAccount={pushAccount} profiles={profiles}/>
        <Mainp user={user[user.findIndex((user) => user.id == option.id)]} setUser={handleChangeUser} opt={option}/>
      </div>
  )
}

export default App;
