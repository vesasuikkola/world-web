import express from 'express';
import { collections } from '../constants/constants.js';
import * as models from '../models/models.js';

const router = express.Router();

export const usage = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        'Available collections are: <a href="/world/countries">/countries</a>, <a href="/world/cities">/cities</a>, <a href="/world/languages">/languages</a>'
      );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    res.status(200).json(await readCollection(req.params.collection));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    res
      .status(200)
      .json((await readCollection(req.params.collection, req.params.code))[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readCollection = (collection, code) => {
  let query = {};
  const projection = { _id: 0, __v: 0 };
  const options = { limit: 10 }; //TODO: parametrize these for the client to control?
  switch (collection) {
    case collections.CITIES:
      if (code) query.CountryCode = code;
      return models.City.find(query, projection, options);
    case collections.COUNTRIES:
      if (code) query.Code = code;
      return models.Country.find(query, projection, options);
    case collections.LANGUAGES:
      if (code) query.CountryCode = code;
      return models.Language.find(query, projection, options);
    default:
      return undefined;
  }
};

export default router;
