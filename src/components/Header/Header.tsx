import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";

function Header() {
  const [navbarState, setNavbarState] = useState(false);

  const drawerToggleClickHandler = () => {
    setNavbarState(!navbarState);
  };

  const handleBackdropClick = () => {
    setNavbarState(false)
  }

  let backdrop;

  if (navbarState) {
    backdrop = <Backdrop click={handleBackdropClick} />;
  }

  return (
    <>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={navbarState} />
      {backdrop}
    </>
  );
}

export default Header;
