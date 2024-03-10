import React, { useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiDaySunnyOvercast,
  WiFog,
} from "react-icons/wi";
import "./App.css";

const WeatherApp = () => {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [showData, setShowData] = useState(false);

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    setShowData(false);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=dc96c4b1c95a345b4284845fbcfc72fc`
      );

      setWeatherData(response.data);
      console.log(response.data);
      setError(false);
      setShowData(true);
    } catch (error) {
      setError(true);
    }
  };

  const weatherIcons = {
    "01d": <WiDaySunny size={70} color="#FFD700" />,
    "01n": <WiDaySunny size={70} color="#FFD700" />,
    "02n": <WiDaySunnyOvercast size={70} color="#666666" />,
    "02d": <WiCloud size={70} color="#666666" />,
    "03d": <WiCloud size={70} color="#666666" />,
    "03n": <WiCloud size={70} color="#666666" />,
    "04d": <WiCloud size={70} color="#666666" />,
    "04n": <WiCloud size={70} color="#666666" />,
    "09d": <WiRain size={70} color="#0000FF" />,
    "10d": <WiRain size={70} color="#0000FF" />,
    "11d": <WiThunderstorm size={24} color="#FF4500" />,
    "13d": <WiSnow size={70} color="#FFFFFF" />,
    "50d": <WiFog size={70} color="#666666" />,
    "50n": <WiFog size={70} color="#666666" />,
  };

  const getWeatherIcon = (weatherCode) => {
    return weatherIcons[weatherCode] || null;
  };

  return (
    <div className="weather-app">
      <div className="app-creator">
        &copy; {new Date().getFullYear()} Weather App
      </div>
      <form onSubmit={fetchWeatherData}>
        <input
          type="text"
          placeholder="Search city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>

      {error && (
        <p className="error">Error fetching weather data. Please try again.</p>
      )}

      {weatherData && (
        <div className={`weather-data ${showData ? "show" : ""}`}>
          {getWeatherIcon(weatherData.weather[0].icon)}
          <div className="temperature-details">
            <h2>{weatherData.name}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;