import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './App.routes';

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
