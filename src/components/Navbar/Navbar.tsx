import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Logo from "../Logo/Logo";

interface NavbarProps {
  drawerClickHandler: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ drawerClickHandler }) => {
  return (
    <header className="navbar-block">
      <div className="navbar-content">
        <div className="navbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="spacer" />
        <div className="navbar-items">
          <ul>
            <Link to="/pokemon">
              <li>Pokémon</li>
            </Link>
            <Link to="/avatar">
              <li>Avatar</li>
            </Link>
            <Link to="/naruto">
              <li>Naruto</li>
            </Link>
            <Link to="/cats">
              <li>Cats</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
