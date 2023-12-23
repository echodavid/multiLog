
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx"
import Mainp from "./components/Mainp.jsx"; 


function App() {
  const [option, setOption] = useState("fb");
  
  const handleNavbarClick = (opt) => {
    setOption(opt);
  };
  

  const [user, setUser] = useState(
    {ig:{
      username:'',
      password:'',
      notifications: [],
    },
    fb:{
      username:'',
      password:'',
      notifications: [],
    },
    tw:{
      username:'',
      password:'',
      notifications: [],
    }}
  )

  const handleChangeUser = ((username, password, notifications) =>{
      setUser({
        ...user, 
        [option]:{
          username:username,
          password:password,
          notifications: notifications,
        }
      })
    }
  )



  return (
      <div className="main">
        <Navbar handleNavbarClick={handleNavbarClick} selectedOption={option}/>
        <Mainp user={user[option]} setUser={handleChangeUser} opt={option}/>
      </div>
  )
}

export default App;
