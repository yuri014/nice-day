import React from "react";

import "./Navbar.css";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Logo from "../Logo/Logo";

interface NavbarProps {
  drawerClickHandler: () => void;
}

const Navbar: React.FC<NavbarProps> = ({drawerClickHandler}) => {
  return (
    <header className="navbar-block">
      <div className="navbar-content">
        <div className="navbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="navbar-logo"><Logo />
        </div>
        <div className="spacer" />
        <div className="navbar-items">
          <ul>
            <li>Pokémon</li>
            <li>Avatar</li>
            <li>Naruto</li>
            <li>Cats</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
