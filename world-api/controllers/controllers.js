import express from 'express';
import { collections } from '../constants/constants.js';
import * as models from '../models/models.js';
import * as analyticsService from '../services/analyticsService.js';

const router = express.Router();

export const usage = async (req, res) => {
  try {
    res.status(200).json({
      usage: 'Call some available collection',
      collections: {
        countries: '/world/countries',
        cities: '/world/cities',
        languages: '/world/languages'
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const docs = await readCollection(req.params.collection);
    docs ? res.status(200).json(docs) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const doc = (
      await readCollection(req.params.collection, req.params.code)
    )[0];
    if (doc) {
      res.status(200).json(doc);
      analyticsService.updateViews(req.params.code, req.headers.authorization);
    } else res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readCollection = (collection, code) => {
  let query = {};
  const projection = { _id: 0, __v: 0 };
  const options = { limit: 100 }; //TODO: parametrize these for the client to control?
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
