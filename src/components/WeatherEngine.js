import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=643f0ce9baa28ce8b2397f81ef1c7e20`
    );
    const resJson = await apiRes.json();
    setWeather({
      temp: resJson.main.temp,
      city: resJson.name,
      condition: resJson.weather[0].main,
      country: resJson.sys.country,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);
  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      ></WeatherCard>
      <form>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={(event) => handleSearch(event)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
