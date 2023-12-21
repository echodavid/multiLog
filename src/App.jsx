
import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx"
import Mainp from "./components/Mainp.jsx"; 


function App() {
  const [username, setUsername] = useState(
    {ig:"", tw:"", fb:""}
  );
  const [option, setOption] = useState("ig");
  return (
      <div className="main">
        <Navbar />
        <Mainp username={username} setUsername={setUsername} opc={option}/>
      </div>
  )
}

export default App;
