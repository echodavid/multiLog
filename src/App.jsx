
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
      password:''
    },
    fb:{
      username:'',
      password:''
    },
    tw:{
      username:'',
      password:''
    }}
  )

  const handleChangeUser = ((username, password) =>{
      setUser({
        ...user, 
        [option]:{
          username:username,
          password:password
        }
      })
    }
  )



  return (
      <div className="main">
        <Navbar handleNavbarClick={handleNavbarClick} selectedOption={option}/>
        <Mainp user={user[option]} setUser={handleChangeUser}/>
      </div>
  )
}

export default App;
