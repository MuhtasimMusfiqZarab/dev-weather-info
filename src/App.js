import React, { Component } from "react";

import Title from "./components/Title";
import InputForm from "./components/InputForm";
import Weather from "./components/Weather";

const API_KEY = "0ba5bddf480ccd34702a3d134534e8aa";

class App extends Component {
  state = {
    lat: undefined,
    long: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  componentDidMount() {
    let latitude;
    let longitude;
    //try to fetch current location
    const success = async position => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude, longitude);

      //fetching and saving current location weather
      const api_call = await this.getWeather(latitude, longitude);
      const data = await api_call.json();
      this.dataToState(data, latitude, longitude);
    };

    function error() {
      console.log("Unable to find location");
    }

    if (!navigator.geolocation) {
      console.log("geolocation is not supported by the browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  getWeather = async (lat, long) => {
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    );
  };

  fetchWeather = async e => {
    let lat;
    let long;

    //defining latitute and longitude for cities
    switch (e.target.value) {
      case "dhaka":
        lat = 23.7104;
        long = 90.40744;
        break;
      case "chittagong":
        lat = 22.3419;
        long = 91.815536;
        break;
      case "sylhet":
        lat = 24.894802;
        long = 91.869034;
        break;
      case "rajshahi":
        lat = 24.374;
        long = 88.60114;
        break;
      case "barishal":
        lat = 22.6999972;
        long = 90.3666652;
        break;

      default:
        break;
    }

    const api_call = await this.getWeather(lat, long);

    const data = await api_call.json();
    this.dataToState(data, lat, long);
  };

  //saving the response data to state
  dataToState = (data, lat, long) => {
    if (lat && long) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "You Have To Specify Both The Input  Fields"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <InputForm fetchWeather={this.fetchWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
