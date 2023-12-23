
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Mainp from "./components/Mainp.jsx"; 

import account from './accounts.json'


function App() {
  localStorage.setItem("accounts", JSON.stringify([
    {
        "id": 0,
        "platform": "Facebook",
        "username":"fsdf",
        "password":"",
        "notifications": []
    },
    {
        "id": 1,
        "platform": "Instagram",
        "username":"fsdf",
        "password":"",
        "notifications": []
    },
    {
        "id": 2,
        "platform": "X",
        "username":"fsdf",
        "password":"",
        "notifications": []
    }
  ]))
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

  const pushAccount = (platform, username, password, notifications) => {
    console.log(platform, username, password, notifications)
    
    localStorage.setItem("accounts", JSON.stringify([
      ...JSON.parse(localStorage.getItem("accounts")),
      {
        id: Math.random().toString(36).substring(7),
        platform: platform,
        username: username,
        password: password,
        notifications: notifications,
      }
    ]))
    console.log(JSON.parse(localStorage.getItem("accounts")))
    setTotal(total + 1)
    setUser(JSON.parse(localStorage.getItem("accounts")))
    console.log(user);
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("accounts")))
  }, [total])



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

  const [usertemp, setUsertemp] = useState({
    username: "",
    password: "",
    notifications: [],
  })
  const index = user.findIndex((user) => user.id == option.id);
  return (
      <div className="main">
        <Navbar handleNavbarClick={handleNavbarClick} selectedOption={option} pushAccount={pushAccount} profiles={profiles}/>
        <Mainp user={user[index]} setUser={handleChangeUser} opt={option.platform}/>
      </div>
  )
}

export default App;
