// CurrentWeather.js
import React from 'react';

const CurrentWeather = ({ data }) => (
  <div>
    <h2>{data.name}</h2>
    <p>Temperature: {data.main.temp} °C</p>
    <p>Humidity: {data.main.humidity} %</p>
    <p>Wind Speed: {data.wind.speed} m/s</p>
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
    <p>{data.weather[0].description}</p>
  </div>
);

export default CurrentWeather;
