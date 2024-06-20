import { useWeather } from '../context/waetherContext';


//import { useWeather } from '../context/WeatherContext';

//import { useWeather } from '../context/WeatherContext';

const WeatherInfo = () => {
  const { weather, forecast } = useWeather();

  if (!weather) return null;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl mb-2">{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>

      {forecast && forecast.list && (
        <div className="mt-4">
          <h3 className="text-xl mb-2">Forecast</h3>
          {forecast.list.slice(0, 5).map((item, index) => (
            <div key={index} className="mb-2">
              <p>Date: {new Date(item.dt_txt).toLocaleDateString()}</p>
              <p>Temperature: {item.main.temp} °C</p>
              <p>Condition: {item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
