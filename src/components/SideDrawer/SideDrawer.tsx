import React from "react";
import { Link } from "react-router-dom";

import "./Side.css";

interface SideDrawerProps {
  show: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ show }) => {
  let drawerClasses = "side-drawer";

  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
