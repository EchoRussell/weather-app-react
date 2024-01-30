import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            className="WeatherForecast-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="clouds"
          />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-max">19 °</span>
            <span className="WeatherForecast-min">10 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}
