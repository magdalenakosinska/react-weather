import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <img src={props.data.condition.icon_url} alt="weather icon" />
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
