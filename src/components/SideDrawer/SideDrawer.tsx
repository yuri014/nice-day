import React from "react";

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
        <li>Pokémon</li>
        <li>Avatar</li>
        <li>Naruto</li>
        <li>Cats</li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
