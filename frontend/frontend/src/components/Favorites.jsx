import { useEffect } from 'react';
import { useWeather } from '../context/waetherContext';
import WeatherInfo from './WeatherInfo';

const Favorites = () => {
  const { favorites, getFavorites, fetchWeather, fetchForecast } = useWeather();

  useEffect(() => {
    getFavorites();
  }, []);

  const handleViewWeather = (city, state) => {
    fetchWeather(city, state);
    fetchForecast(city, state);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Favorite Locations</h2>
      {favorites.map((location, index) => (
        <div key={index} className="p-2 border mb-2">
          <p>{location.city}, {location.state}</p>
          <button 
            onClick={() => handleViewWeather(location.city, location.state)} 
            className="p-1 bg-blue-500 text-white">
            View Weather
          </button>
        </div>
      ))}
      <WeatherInfo />
    </div>
  );
};

export default Favorites;
