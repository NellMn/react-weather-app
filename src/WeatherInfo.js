import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card currentWeatherCard">
        <div className="card-body">
          <h1>
            <div>
              <span className="locationSign">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span className="city"> {props.data.city} </span>
            </div>
            <div className="currentWeather row">
              <div className="col-6">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
              <div className="col-6">
                <span className="currentIcon">
                  <WeatherIcon code={props.data.icon} size={120} />
                </span>
              </div>
            </div>
          </h1>
          <h5>
            <div className="currentTime">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="todaySituation">
              <span className="maxTemp">{props.data.maxTemp}</span>° /{" "}
              <span className="minTemp">{props.data.minTemp}</span>°
              <span className="todayDesc text-capitalize">
                {" "}
                {props.data.desc}{" "}
              </span>
            </div>
          </h5>
        </div>
      </div>
      <div className="card weatherPropertiesCard">
        <div className="card-body">
          <div className="row">
            <div className="col-3 humidity">
              <i className="fa-sharp fa-solid fa-droplet humidityIcon"></i>
              Humidity
              <br />
              <span> {props.data.humidity} </span>%
            </div>
            <div className="col-3">
              <i className="fa-solid fa-wind windIcon"></i>
              Wind
              <br />
              <span> {props.data.wind} </span> km/h
            </div>
            <div className="col-4">
              <i className="fa-sharp fa-solid fa-cloud-rain precipitationIcon"></i>
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
