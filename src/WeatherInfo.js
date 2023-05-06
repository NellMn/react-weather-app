import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card" id="current-weather-card">
        <div className="card-body">
          <h1>
            <div>
              <span className="locationSign">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span id="city"> {props.data.city} </span>
            </div>
            <p className="currentWeather">
              <span id="current-temperature">{props.data.temperature}</span>
              <span id="unit">°C</span>
              <span id="unit-selection">
                <a href="/" id="celsius-link">
                  °C
                </a>{" "}
                |
                <a href="/" id="fahrenheit-link">
                  °F
                </a>
              </span>
              <span>
                <img
                  src={props.data.iconUrl}
                  id="current-situation"
                  alt={props.data.desc}
                />
              </span>
            </p>
          </h1>
          <h5>
            <div id="current-time">
              <FormattedDate date={props.data.date} />
            </div>
            <div id="today-situation">
              <span id="max-temp">{props.data.maxTemp}</span>° /{" "}
              <span id="min-temp">{props.data.minTemp}</span>°
              <span id="today-description" className="text-capitalize">
                {" "}
                {props.data.desc}{" "}
              </span>
            </div>
          </h5>
        </div>
      </div>
      <div className="card" id="weather-properties-card">
        <div className="card-body">
          <div className="row">
            <div className="col-3 humidity">
              <i
                className="fa-sharp fa-solid fa-droplet"
                id="humidity-icon"
              ></i>
              Humidity
              <br />
              <span id="humidity"> {props.data.humidity} </span>%
            </div>
            <div className="col-3">
              <i className="fa-solid fa-wind" id="wind-icon"></i>
              Wind
              <br />
              <span id="wind"> {props.data.wind} </span> km/h
            </div>
            <div className="col-4">
              <i
                className="fa-sharp fa-solid fa-cloud-rain"
                id="precipitation-icon"
              ></i>
              Precipitation
              <br />
              14%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
