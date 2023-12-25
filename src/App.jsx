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
        return (
          JSON.parse(localStorage.getItem("accounts"))
        )
      } catch (error) {
        return []
      }
    }
  )
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(user));
  }, [user]);
  const [empty, setEmpty] = useState(true);
  const [option, setOption] = useState(
    () => {
      if (user == null || user.length == 0) {
        return {};
      }
      return (
        {
          id: user[user.length - 1].id,
          platform: user[user.length - 1].platform,
        }
      )
    }
  );

  const handleNavbarClick = (opt) => {
    setOption(opt);
  };

  const [profiles, setProfiles] = useState(
    () => {
      if (user == null) {
        return []
      }
      return (
        user.map((account) => {
          return {
            id: account.id,
            platform: account.platform,
          }
        }
        ))
    }
  )



  const clear = () => {
    localStorage.clear();
    setUser([]);
  }

  //agregar nueva cuente
  const pushAccount = (idd, platform) => {
    const newAccount = {
      id: idd,
      platform: platform,
      username: "",
      password: "",
      notifications: [],
    };

    if (user == null) {
      setUser([newAccount]);
      return;
    }
    const updatedAccounts = [
      ...user,
      newAccount,
    ];
    // Actualizar el estado de user
    initAccounts(updatedAccounts);
    setUser(updatedAccounts);
    setOption({
      id: idd,
      platform: platform,
    });
  }



  //clear()

  //eliminar cuenta
  const deleteAccount = (id) => {
    let updatedAccounts = [];
    for (let i = 0; i < user.length; i++) {
      if (user[i].id != id) {
        updatedAccounts.push(user[i]);
      }
    }
    setUser(updatedAccounts);
    let newOption = option;
    if (id == option.id) {
      if (updatedAccounts.length == 0) {
        newOption = {}
      } else {
        newOption = {
          id: updatedAccounts[updatedAccounts.length - 1].id,
          platform: updatedAccounts[updatedAccounts.length - 1].platform,
        };
      }
    }
    setOption(newOption); // Llamar a setOption con newOption al final de la función
  }

  //sincronizar selectedUser con option
  useEffect(() => {
    if (option == {} || option.id == null) {
      setSelectedUser(null);
    } else {
      const newUser = user.find((user) => user.id === option.id);
      setSelectedUser(newUser);
    }
  }, [option, user]);


  //sincronizar profiles con user
  useEffect(() => {
    setProfiles(
      () => {
        if (user == null) {
          return []
        }
        return (
          user.map((account) => {
            return {
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
    } else {
      setEmpty(false);
    }
  }, [user, option, selectedUser])

  const handleChangeUser = (id, username, password, notifications) => {
    const index = user.findIndex((user) => user.id == id)
    const newUser = [...user];
    newUser[index] = {
      id: id,
      platform: option.platform,
      username: username,
      password: password,
      notifications: notifications,
    };
    setUser(newUser);
  };


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
            (user == null || user.length == 0) ? (
              <div className="mainp">
                <h1>No hay cuentas</h1>
                <p>Por favor agrega una nueva cuenta</p>
              </div>
            ) : (
              <Mainp user={selectedUser} setUser={handleChangeUser} opt={option} />
            )
          )
        )
      }
    </div>
  )
}

export default App;
