import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
 
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState('Lisbon');

  useEffect(() => {
    const apiKey = 'b1413ed7e08bdb32f52c4b761d92a978';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then((response) => {
      setWeatherData ({
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        date: 'Wednesday 03:00',
        iconUrl: 'https://img.freepik.com/free-vector/hand-drawn-chuva-de-amor-decoration-element-collection_23-2148919613.jpg?size=626&ext=jpg',
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name
    })

    });

  }, [city]);

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        { <><form>
                <div className='row'>
                    <div className='col-9'>
                        <input
                            type='search'
                            placeholder='Search your city...'
                            className='form-control'
                            autoFocus='on' />
                    </div>
                    <div className='col-3'>
                        <input
                            type='submit'
                            value='Search'
                            className='btn btn-primary w-100' />
                    </div>
                </div>
            </form><h1>
                    {weatherData.city}
                </h1><ul>
                    <li>
                        {weatherData.date}
                    </li>
                    <li className='text-capitalize'>
                        {weatherData.description}
                    </li>
                </ul><div className='row mt-3'>
                    <div className='col-6'>
                        <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description} />
                        <span className='temperature'>{Math.round(weatherData.temperature)}</span>
                        <span className='unit'>°С</span>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div></>}
      </div>
    );
  } else {
    return "Loading...";
  }
}
