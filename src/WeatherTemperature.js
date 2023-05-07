import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemperature">{props.celsius}</span>
        <span className="unit">°C</span>
        <span className="unitSelection">
          °C |{""}
          <a href="/" className="fahrenheitLink" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="unit">°F</span>
        <span className="unitSelection">
          <a href="/" className="celsiusLink" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
