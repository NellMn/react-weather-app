import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col EachDay">
          <div className="ForecastDay">Sun</div>
          <WeatherIcon className="ForecastIcon" code="11d" size={48} />
          <div className="ForecastTemperatures">
            <span className="ForecastMaxTemp">18</span>°{""}
            <span className="ForecastMinTemp">11</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
