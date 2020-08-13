import React from "react";

import "./DrawerButton.css";

interface DrawerProps {
  click: () => void;
}

const DrawerToggleButton: React.FC<DrawerProps> = ({click}) => {
  return (
    <button className="toggle-button" onClick={click}>
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
    </button>
  );
}

export default DrawerToggleButton;
