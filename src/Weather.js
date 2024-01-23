import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control "
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul className="time-description">
          <li>
            <FormatedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">
            Mostly : {weatherData.description}{" "}
          </li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img
              className="cloud-icon"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            ></img>
            <span className="degree">{weatherData.temperature}</span>
            <span className="temp-unit">°C</span>
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
  } else {
    const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
