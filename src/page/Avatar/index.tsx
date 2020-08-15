import React from "react";

import avatarTheme from "../../data/Avatar";
import WeatherApp from "../../components/Weather/Weather";

function Avatar() {
 
  return (
    <WeatherApp propsTheme={avatarTheme} />
  );
}

export default Avatar;
