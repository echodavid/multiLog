
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Mainp from "./components/Mainp.jsx"; 

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const initAccounts = (first) => {
    localStorage.setItem("accounts", JSON.stringify(first));
  }

  const [user, setUser] = useState(
    () => {
      try {
        return(
          JSON.parse(localStorage.getItem("accounts"))
        )
      } catch (error) {
        return []
      }
    }
  )
  console.log(user)
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(user));
  }, [user]);
  console.log(localStorage.getItem('accounts'))
  
  
  




  const [empty, setEmpty] = useState(true);
  

  //initAccounts()

  
  console.log(JSON.parse(localStorage.getItem("accounts")));
  

  const [option, setOption] = useState(
    () => {
      console.log(user)
      if (user == null || user.length == 0) {
        return {};
      }
      return(
        {
          id: user[user.length-1].id,
          platform: user[user.length-1].platform,
        }
      )
    }
  );

  


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

    if (user == null) {
      setUser([newAccount]);
      return;
    }
    const updatedAccounts = [
      ...user,
      newAccount,
    ];
    console.log(updatedAccounts)
    // Actualizar el estado de user
    initAccounts(updatedAccounts);
    setUser(updatedAccounts);
    setOption({
      id: idd,
      platform: platform,
    })
    console.log(option)
    console.log(user)
    console.log(empty)
  }



  //clear()

  const deleteAccount = (id) => {




    console.log(id)
    console.log(user)

    let updatedAccounts = [];
      for(let i = 0; i < user.length; i++){
        console.log(user[i].id)
        if(user[i].id != id){
          console.log("miau")
          updatedAccounts.push(user[i]);
        }
      }
    
    console.log(updatedAccounts)
    
    setUser(updatedAccounts);
    let newOption = option;


    console.log(user)
    if(id == option.id){
      console.log("miau")
      if (updatedAccounts.length == 0) {
        console.log("miauu")
        newOption = {}
      } else{
        console.log("miaugo")
        console.log(option)
        console.log(profiles[profiles.length-2].id)
        console.log(profiles[profiles.length-2].platform)
        newOption = {
          id: updatedAccounts[updatedAccounts.length-1].id,
          platform: updatedAccounts[updatedAccounts.length-1].platform,
        };
        console.log(user)
        console.log(profiles.length)
      }
      console.log(user)
    }
    console.log(option)
    console.log(newOption)
    setOption(newOption); // Llamar a setOption con newOption al final de la función
    console.log(option)

    /*
    const updatedAccounts = user.filter((account) => account.id !== id);
    setUser(updatedAccounts);
    if(id == option.id){
      if (user == null) {
        setOption({
        });
      } else{
        console.log(profiles.length)
        setOption({
          id: profiles[profiles.length-1].id,
          platform: profiles[profiles.length-1].platform,
        });
      }
    }*/
  }
  
  useEffect(() => {
    const newUser = user.find((user) => user.id === option.id);
    setSelectedUser(newUser);
  }, [option, user]);
  


  console.log(selectedUser)
  console.log(user)
  console.log(profiles)
  console.log(option)
  console.log(empty)
  useEffect(() => {
    setProfiles(
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
  }, [user])
  useEffect(() => {
    if (user == null || user.length == 0) {
      setEmpty(true);
    } else{
      setEmpty(false);
  }}, [user, option, selectedUser])

  


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

  console.log(index())
  console.log(user)
  console.log(option)
  console.log(selectedUser)
  return (
      <div className="main">
        <Navbar
                handleNavbarClick={handleNavbarClick}
                selectedOption={option}
                pushAccount={pushAccount}
                deleteAccount={deleteAccount}
                profiles={profiles}
              />
        {
          empty ? ( 
            <>
              <div className="mainp">
                <h1>No hay cuentas</h1>
                <p>Por favor agrega una nueva cuenta</p>
              </div>
            </>
          ) : (
            ( 
                (user == null || user.length == 0)? (
                  <div className="mainp">
                    <h1>No hay cuentas</h1>
                    <p>Por favor agrega una nueva cuenta</p>
                  </div>
                ) : (
                  <Mainp user={selectedUser} setUser={handleChangeUser} opt={option}/>
                  
                )
                )
            
            )
        }
        
      </div>
  )
}

export default App;
