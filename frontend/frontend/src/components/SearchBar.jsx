import { useState } from 'react';
import { useWeather } from '../context/waetherContext';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const { fetchWeather, fetchForecast } = useWeather();

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchWeather(city, state);
    await fetchForecast(city, state);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="City" 
        className="p-2 border"
      />
      <input 
        type="text" 
        value={state} 
        onChange={(e) => setState(e.target.value)} 
        placeholder="State" 
        className="p-2 border mx-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Search</button>
    </form>
  );
};

export default SearchBar;
