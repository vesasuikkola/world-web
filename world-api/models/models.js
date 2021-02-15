import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  CountryCode: String,
  District: String,
  Population: Number
});

export const City = mongoose.model('City', citySchema);

const countrySchema = new mongoose.Schema({
  Code: String,
  Name: String,
  Continent: String,
  Region: String,
  SurfaceArea: Number,
  IndepYear: Number,
  Population: Number,
  LifeExpectancy: Number,
  GNP: Number,
  GNPOld: Number,
  LocalName: String,
  GovernmentForm: String,
  HeadOfState: String,
  Capital: Number,
  Code2: String
});

export const Country = mongoose.model('Country', countrySchema);

const languageSchema = new mongoose.Schema({
  CountryCode: String,
  Language: String,
  IsOfficial: Boolean,
  Percentage: Number
});

export const Language = mongoose.model('Language', languageSchema);
