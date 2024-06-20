import axios from "axios"
import Location from "../model/Location.js"
import dotenv from "dotenv";
dotenv.config();

export const getWeather = async (req,res) =>{
    const {city , state} = req.body;
    console.log(`${city} ${state}`)

    try {
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
     res.status(200).json(response.data);
     
    } catch (err) {
        console.error('Error fetching current weather data:', err.response ? err.response.data : err.message);
        res.status(500).json({ message: 'Error fetching weather data', error: err.response ? err.response.data : err.message });   
     }
}

export const addFavorite = async(req,res) =>{
    try {
        const {city , state} = req.body;
       const location = new Location({
          city , state
       })
       await location.save();
       res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Error saving location' });
    }
    
}

export const getForecast = async (req, res) => {
    const {city , state} = req.body;
    console.log(`${city} ${state}`)

    try {
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
     res.status(200).json(response.data);
     
    } catch (err) {
        console.error('Error fetching current weather data:', err.response ? err.response.data : err.message);
        res.status(500).json({ message: 'Error fetching weather data', error: err.response ? err.response.data : err.message });   
     }
  };

  export const getFavorites = async (req, res) => {
    try {
      const locations = await Location.find();
      res.status(200).json(locations);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching locations' });
    }
  };