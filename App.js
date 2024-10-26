// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      
      setWeatherData(currentWeather.data);
      setForecastData(forecast.data);
      setError('');
    } catch (err) {
      setError('City not found or API error');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchWeather} />
      {error && <p>{error}</p>}
      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
};

export default App;
