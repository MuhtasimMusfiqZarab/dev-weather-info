import React, { Component } from "react";

const InputForm = props => (
  <form action="" onSubmit={props.fetchWeather}>
    <input type="text" name="city" placeholder="Enter City .." />
    <input type="text" name="country" placeholder="Enter Country .." />
    <button>Fetch Weather</button>
  </form>
);
export default InputForm;
