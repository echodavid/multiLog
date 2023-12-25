import React, { useEffect, useState, useRef } from "react";

import '../styles/Navbar.css'
import NavItem from "./NavItem.jsx";
import AccountType from "./AccountType.jsx";

const Navbar = ({ handleNavbarClick, pushAccount, selectedOption, profiles, deleteAccount }) => {


  const [show, setShow] = useState(false);
  const showAdd = () => setShow(!show);

  const scroll = useRef(null);

  const clic = (plat) => {
    scroll.current.scrollTo(0, 0);
    const id = Math.random().toString(36).substring(7);
    setShow(false);
    handleNavbarClick({ id: id, platform: plat });
    pushAccount(id, plat);
  }

  const remove = (id) => {
    deleteAccount(id);
  }

  return (
    <nav className="navbar">
      <ul className="navbar-nav" ref={scroll}>
        {

          [...profiles].reverse().map((opt) => {
            return (
              <NavItem
                key={opt.id}
                option={opt}
                selectedOption={selectedOption}
                handleNavbarClick={handleNavbarClick}
                deleteAccount={(id) => { remove(id) }}
              />
            )
          }
          )
        }
      </ul>
      <ul className="navbar-nav row">
        <li>
          <a href="#-1" onClick={showAdd}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon add bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
              </svg>
            </i>
          </a>
        </li>
        {show && <AccountType clic={(val) => clic(val)} />}
      </ul>
    </nav>
  );
};

export default Navbar;