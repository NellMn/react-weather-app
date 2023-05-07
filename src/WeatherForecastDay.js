import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return `${day}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon
        className="ForecastIcon"
        code={props.data.weather[0].icon}
        size={48}
      />
      <div className="ForecastTemperatures">
        <span className="ForecastMaxTemp">{maxTemperature()}°</span>
        <span className="ForecastMinTemp">{minTemperature()}°</span>
      </div>
    </div>
  );
}
