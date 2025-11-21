import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import {NoteState} from './Contexts/NoteState.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <NoteState>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </NoteState>
);
