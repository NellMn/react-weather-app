import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      city: response.data.name,
      date: "Sunday 12:10",
      iconUrl: "https://openweathermap.org/img/wn/04d@2x.png",
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form id="search-form">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="Enter a city name"
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Search
                </button>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-success current-location"
                >
                  Current Location
                </button>
              </div>
            </div>
          </form>
          <div className="card" id="current-weather-card">
            <div className="card-body">
              <h1>
                <div>
                  <span className="locationSign">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span id="city"> {weatherData.city} </span>
                </div>
                <p className="currentWeather">
                  <span id="current-temperature">
                    {weatherData.temperature}
                  </span>
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
                      src={weatherData.iconUrl}
                      id="current-situation"
                      alt={weatherData.desc}
                    />
                  </span>
                </p>
              </h1>
              <h5>
                <div id="current-time">{weatherData.date}</div>
                <div id="today-situation">
                  <span id="max-temp">18</span>° / <span id="min-temp">7</span>°
                  <span id="today-description" className="text-capitalize">
                    {" "}
                    {weatherData.desc}{" "}
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
                  <span id="humidity"> {weatherData.humidity} </span>%
                </div>
                <div className="col-3">
                  <i className="fa-solid fa-wind" id="wind-icon"></i>
                  Wind
                  <br />
                  <span id="wind"> {weatherData.wind} </span> km/h
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
      </div>
    );
  } else {
    const apiKey = "258213fabfb6e561af7eeb257d2a3047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);

    return "Loading...";
  }
}
