import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=643f0ce9baa28ce8b2397f81ef1c7e20"
    );
    const resJson = await apiRes.json();
    return resJson;
  };
  data().then((res) => {
    console.log("The temperature is: " + res.main.temp);
  });
  return (
    <div className="App">
      <WeatherCard
        temp={20}
        condition="Clear"
        city="Sydney"
        country="AU"
      ></WeatherCard>
      <WeatherCard
        temp={0}
        condition="Tornado"
        city="Cleveland"
        country="US"
      ></WeatherCard>
    </div>
  );
}

export default App;
