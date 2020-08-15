import React from "react"

import narutoTheme from "../../data/Naruto"

import WeatherApp from "../../components/Weather/Weather"

function Naruto() {
    return (
        <WeatherApp propsTheme={narutoTheme} />
    )
}

export default Naruto