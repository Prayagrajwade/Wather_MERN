import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchWeather = async (city, state) => {
    const response = await axios.post('http://localhost:4000/api/weather/current', { city, state });
    setWeather(response.data);
  };

  const fetchForecast = async (city, state) => {
    const response = await axios.post('http://localhost:4000/api/weather/forecast', { city, state });
    setForecast(response.data);
  };

  const addFavorite = async (city, state) => {
    const response = await axios.post('http://localhost:4000/api/weather/favorites', { city, state });
    setFavorites([...favorites, response.data]);
  };

  const getFavorites = async () => {
    const response = await axios.get('http://localhost:4000/api/weather/favorites');
    setFavorites(response.data);
  };

  return (
    <WeatherContext.Provider value={{ weather, forecast, favorites, fetchWeather, fetchForecast, addFavorite, getFavorites }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
