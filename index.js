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
  origin: 'http://localhost:3000', // or ['http://localhost:3000', ...] for more
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

