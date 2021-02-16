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
    res.status(200).json(await readCollection());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    res.status(200).json(await readCollection(req.params.code));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addOrUpdate = async (req, res) => {
  try {
    res
      .status(200)
      .json({ success: (await updateCollection(req.params.code)).ok === 1 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readCollection = (code) => {
  let query;
  const options = { limit: 10 }; //TODO: parametrize these for the client to control?
  query = code ? { countryCode: code } : {};
  //FIXME refactor the below hack
  const result = models.View.find(query, null, options);
  return code
    ? result.map((doc) => {
        return {
          views: doc[0].views,
          lastView: doc[0].lastView
        };
      })
    : result;
  //
};

const updateCollection = (code) => {
  return models.View.updateOne(
    { countryCode: code },
    { lastView: new Date(Date.now()), $inc: { views: 1 } },
    { upsert: true }
  );
};

export default router;
