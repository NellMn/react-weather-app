import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
  }

  function search() {
    const apiKey = "258213fabfb6e561af7eeb257d2a3047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="Enter a city name"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
