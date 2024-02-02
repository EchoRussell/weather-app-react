import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <img
              className="WeatherForecast-icon"
              src={forecast[0].weather[0].icon}
              alt={forecast[0].weather[0].description}
            />
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-max">
                {forecast[0].temp.max} °
              </span>
              <span className="WeatherForecast-min">
                {forecast[0].temp.min} °
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
