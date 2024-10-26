// Forecast.js
import React from 'react';

const Forecast = ({ data }) => (
  <div>
    <h3>5-Day Forecast</h3>
    <div>
      {data.list.filter((item, index) => index % 8 === 0).map((forecast) => (
        <div key={forecast.dt}>
          <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
          <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} />
          <p>{forecast.main.temp_min}°C - {forecast.main.temp_max}°C</p>
        </div>
      ))}
    </div>
  </div>
);

export default Forecast;
