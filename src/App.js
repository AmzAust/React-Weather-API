import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Cleveland, US" />
      <WeatherEngine location="Cleveland, US" />
    </div>
  );
}

export default App;
