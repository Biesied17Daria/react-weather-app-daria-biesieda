import React, { useState, useEffect } from "react";
import "../styles/WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // Обновленный useEffect с добавленной зависимостью load
    const load = () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl)
        .then(handleResponse)
        .catch(error => {
          console.error("Error fetching forecast data from API:", error);
          // Оставляем loaded в состоянии "не загружено" при ошибке
          setLoaded(false);
        });
    };

    load(); // Вызываем load при каждом изменении props.coordinates

  }, [props.coordinates]); // Добавлен load в массив зависимостей

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  const filteredForecast = forecast.slice(0, 6);

  return (
    <div className="WeatherForecast">
      <div className="row">
        {filteredForecast.map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
