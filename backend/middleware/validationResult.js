import {check, validationResult } from "express-validator";

export const validateWeatherRequest = [
  check('city').notEmpty().withMessage('City name is required'),
  check('state').notEmpty().withMessage('State name is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateAddFavorite = [
  check('city').notEmpty().withMessage('City name is required'),
  check('state').notEmpty().withMessage('State name is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
