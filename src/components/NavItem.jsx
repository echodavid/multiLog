import React from 'react';

const NavItem = ({ option, selectedOption, handleNavbarClick}) => {
    /*console.log(option)
    console.log(selectedOption)
    console.log(handleNavbarClick)*/
    return (
        <a 
            href="#" 
            className={`nav-link ${option.text == selectedOption ? "active" : ""}`}
            onClick={() => handleNavbarClick(option.text)}
        >
          <i>
            {option.svg()}
          </i>
        </a>
    );
};

export default NavItem;