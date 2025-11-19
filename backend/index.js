import connectMongo from './db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); 
connectMongo();

import express, { json } from 'express';
const app = express()

app.use(json())
app.use(cors({
  origin: 'http://localhost:3000', // frontend origin during local dev
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // if you use cookies or auth headers
}));
app.use('*',cors());

import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);