import React, { useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("Cleveland", "US");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=643f0ce9baa28ce8b2397f81ef1c7e20`
    );
    const resJson = await apiRes.json();
    return resJson;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
  };

  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
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
}

export default App;
