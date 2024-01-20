import React from "react";
import "./Weather.css";
export default function Weather() {
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
        <li>Wednesday : 07:00</li>
        <li>Mostly : cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            className="cloud-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="clouds"
          ></img>
          <span className="degree">-9</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 0% </li>
            <li>Humidity : 61%</li>
            <li> Wind : 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
