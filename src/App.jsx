import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/not-found" element={ <NotFound /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
