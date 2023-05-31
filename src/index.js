import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css'

const rootElement = document.getElementById('root');

// Use the createRoot API from the react-dom/client import:
createRoot(rootElement).render(<App />);