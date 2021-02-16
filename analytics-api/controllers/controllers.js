import express from 'express';
import * as models from '../models/models.js';

const router = express.Router();

export const usage = async (req, res) => {
  try {
    res
      .status(200)
      .send('Available collections are: <a href="/analytics/views">/views</a>');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const docs = await readCollection();
    docs ? res.status(200).json(docs) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const doc = (await readCollection(req.params.code))[0];
    doc ? res.status(200).json(doc) : res.status(404).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addOrUpdate = async (req, res) => {
  try {
    (await updateCollection(req.params.code)).ok === 1
      ? res.status(201).send()
      : res.status(400).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readCollection = (code) => {
  let query;
  const projection = { _id: 0, __v: 0 };
  const options = { limit: 100 }; //TODO: parametrize these for the client to control?
  query = code ? { countryCode: code } : {};
  return models.View.find(query, projection, options);
};;;;

const updateCollection = (code) => {
  return models.View.updateOne(
    { countryCode: code },
    { lastView: new Date(Date.now()), $inc: { views: 1 } },
    { upsert: true }
  );
};

export default router;
