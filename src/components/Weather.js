import React, { useState } from "react";
import WeatherForecast from "../components/WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "../styles/Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log("API Response:", response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    console.log("API Request URL:", apiUrl);
    axios.get(apiUrl)
      .then(handleResponse)
      .catch(error => {
        console.error("Error fetching data from API:", error);
        console.log("Full error object:", error);
        setWeatherData({ ready: false, error: true });
      });
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else if (weatherData.error) {
    return "Не удалось загрузить данные.";
  } else {
    // Вызывать search только после отправки формы
    return "Загрузка...";
  }
  }