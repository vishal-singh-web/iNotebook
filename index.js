import connectMongo from './db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); 
connectMongo();

import express, { json } from 'express';
const app = express()

app.use(json())
app.use(cors());

app.use(cors({
  origin: [
    "http://localhost:3000", // local development
    "https://i-notebook-teal.vercel.app" // your live frontend
  ],
  credentials: true
}));

