
import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx"
import Mainp from "./components/Mainp.jsx"; 


function App() {
  const [option, setOption] = useState("ig");
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
  );
  const handleChange = ((username, password) =>{
      setUser({
        ...user, 
        [option]:{
          username:username,
          password:password
        }
      })
    }
  );
  return (
      <div className="main">
        <Navbar />
        <Mainp user={user[option]} setUser={handleChange}/>
      </div>
  )
}

export default App;
