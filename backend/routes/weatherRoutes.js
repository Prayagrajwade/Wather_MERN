import express from "express";

const router = express.Router();

import {getWeather , addFavorite , getForecast , getFavorites} from "../controllers/weatherController.js";
import { validateAddFavorite, validateWeatherRequest } from "../middleware/validationResult.js";

router.post("/current",validateWeatherRequest, getWeather);
router.post('/forecast',validateWeatherRequest, getForecast);
router.post('/favorites', validateAddFavorite, addFavorite);
router.get('/favorites', getFavorites);

export default router;
