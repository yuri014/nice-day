import React from "react";
import { Sun, CloudRain, CloudSnow } from "react-feather";

function Logo() {
  const handleIcons = () => {
    const arrayIcons = [
      <Sun color="yellow" size={46} />,
      <CloudRain style={{ color: "lightcyan" }} size={46} />,
      <CloudSnow style={{ color: "lightcyan" }} size={46} />,
    ];
    const random = Math.floor(Math.random() * arrayIcons.length);
    return arrayIcons[random];
  };

  return (
    <>
      {handleIcons()}
      <h1>NICE DAY</h1>
    </>
  );
}

export default Logo
