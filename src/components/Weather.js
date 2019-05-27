import React, { Component } from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:{" "}
        <span className="weather__value">
          {" "}
          {props.city},{props.country}
        </span>
      </p>
    )}

    {props.temperature && (
      <p className="weather__key">
        Temperature:{" "}
        <span className="weather__value">
          {" "}
          {(props.temperature - 273.16).toFixed(2)}° Celcius
        </span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value"> {props.humidity}%</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Description:{" "}
        <span className="weather__value">
          {" "}
          {props.description.toUpperCase()}
        </span>
      </p>
    )}
    {props.error && (
      <p className="weather__key">
        <span className="weather__error"> {props.error}</span>
      </p>
    )}
  </div>
);

export default Weather;
