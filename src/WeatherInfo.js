import React from "react";
import FormatedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  const weatherData = props.data;
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="time-description">
        <li>
          <FormatedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">Mostly : {weatherData.description} </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            className="cloud-icon"
            src={weatherData.icon}
            alt={weatherData.description}
          ></img>{" "}
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity : {weatherData.humidity} % </li>
            <li> Wind : {weatherData.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
