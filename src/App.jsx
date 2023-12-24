
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Mainp from "./components/Mainp.jsx"; 

function App() {
  console.log(localStorage.getItem("accounts"))
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
    JSON.parse(localStorage.getItem("accounts"))
  )

  const pushAccount = (platform, username, password) => {
    console.log(platform, username, password)

    const newAccount = {
      id: Math.random().toString(36).substring(7),
      platform: platform,
      username: username,
      password: password,
      notifications: [],
    };

    const updatedAccounts = [
      ...JSON.parse(localStorage.getItem("accounts") || "[]"),
      newAccount
    ];
  
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  
    // Actualizar el estado de user
    setTotal(total + 1);
    console.log(total)
    setUser(updatedAccounts);
    console.log(user);
  }


  const [profiles, setProfiles] = useState(
    user.map((account) => {
      return {
        id: account.id,
        platform: account.platform,
      }
    })
  )

  useEffect(() => {
    setProfiles(
      user.map((account) => {
        return {
          id: account.id,
          platform: account.platform,
        }
      })
    )
  }, [total])
  console.log(total)
  

  


  const handleChangeUser = (index, username, password, notifications) => {
    setUser(
      user[index] = {
        platform: option,
        username: username,
        password: password,
        notifications: notifications,
      }
    )
  }

  const index = user.findIndex((user) => user.id == option.id);
  return (
      <div className="main">
        <Navbar handleNavbarClick={handleNavbarClick} selectedOption={option} pushAccount={pushAccount} profiles={profiles}/>
        <Mainp user={user[index]} setUser={handleChangeUser} opt={option.platform}/>
      </div>
  )
}

export default App;
