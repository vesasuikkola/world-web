import dotenv from 'dotenv';
dotenv.config();

export const AUTH_SECRET = {
  secret: process.env.AUTH_SECRET
};
