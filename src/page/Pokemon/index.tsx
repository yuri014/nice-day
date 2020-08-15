import React, { useState } from "react";

import "./style.css"

import Header from "../../components/Header/Header";

const api = {
  key: "1e0dc6f186b3f9b9ded8a6375fb4ee4d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const pokeapi = "https://pokeapi.co/api/v2/type/"

function Pokemon() {
  const [query, setQuery] = useState("");
  const [weather, setWeather]: any = useState({});

  const [themeUrl, setThemeUrl] = useState("");
  const [themeImg, setThemeImg] = useState("");
  const [themeName, setThemeName] = useState("");

  const dateBuilder = (event: Date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[event.getDay()];
    let date = event.getDate();
    let month = months[event.getMonth()];
    let year = event.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  const search = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      localStorage.clear();
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          setQuery("");
          setThemeUrl("");
          setWeather(result);
        });
    }
  };

  let type: string = "";

  const handleWeatherTheme = () => {
    const now = new Date();
    switch (true) {
      case weather.main.temp > 28 && weather.weather[0].main !== "Rain":
        type = "fire";
        return "weather warm";
      case weather.main.temp <= 14 && weather.weather[0].main !== "Rain":
        type = "ice";
        return "weather cold";
      case weather.weather[0].main === "Rain":
        type = "water";
        return "weather rain";
      case weather.weather[0].main === "Thunderstorm":
        type = "electric";
        return "weather thunderstorm";
      case now.getHours() >= 18 || now.getHours() <= 5:
        const listType: Array<string> = ["dark", "ghost"];
        type = listType[Math.floor(Math.random() * listType.length)];
        return "weather night";
      case weather.wind.speed > 13.9:
        type = "flying";
        return "weather wind";
      default:
        type = "grass";
        return "weather normal";
    }
  };

  const handleThemeApi = () => {
    fetch(`${pokeapi}${type}`)
      .then((response) => response.json())
      .then((result) => {
        const random: number = Math.floor(
          Math.random() * result.pokemon.length
        );
        const url = result.pokemon[random].pokemon.url;
        return setThemeUrl(url);
      });
  };

  const handleThemeImg = () => {
    fetch(`${themeUrl}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.sprites.other["official-artwork"].front_default === null) {
          //? Move this
          var alerted = localStorage.getItem("alerted") || "";
          if (alerted !== "yes") {
            alert("Some Pokémon images are null");
            localStorage.setItem("alerted", "yes");
          }
        } else {
          setThemeName(result.species.name);
          setThemeImg(result.sprites.other["official-artwork"].front_default);
        }
      });
  };

  return (
    <div
      className={
        typeof weather.main != "undefined" ? handleWeatherTheme() : "weather"
      }
    >
      <main className="weather-main">
        <Header />
        <div className="search-block">
          <input
            type="text"
            placeholder="Search..."
            className="search-content"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="climatic-content">
            {themeUrl === "" ? handleThemeApi() : handleThemeImg()}
            <div className="weather-card">
              <img src={themeImg} alt={themeName} />
            </div>
            <div className="location-block">
              <div className="location-content">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-block">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather-content">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <div className="climatic-content">
            <div className="location-block">
              <div className="location-content">
                Search: City, Country
                <br />
                Ex: London, GB
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Pokemon;
