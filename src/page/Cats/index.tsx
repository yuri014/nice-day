import React from "react"

import catsTheme from "../../data/Cats"

import WeatherApp from "../../components/Weather/Weather"

function Cats() {
    return <WeatherApp propsTheme={catsTheme} />
}

export default Cats