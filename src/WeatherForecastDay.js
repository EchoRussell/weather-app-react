import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        className="WeatherForecast-icon"
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.weather[0].description}
      />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max">
          {Math.round(props.data.temp.max)} °
        </span>
        <span className="WeatherForecast-min">
          {Math.round(props.data.temp.min)} °
        </span>
      </div>
    </div>
  );
}
