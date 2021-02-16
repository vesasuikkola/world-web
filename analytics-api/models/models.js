import mongoose from 'mongoose';

const viewSchema = new mongoose.Schema({
  countryCode: String,
  lastView: Date,
  views: { type: Number, default: 1 }
});

export const View = mongoose.model('View', viewSchema);
