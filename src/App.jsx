import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css'
import NotFound from './pages/NotFound';
import Active from './pages/Active';
import StatusActive from './pages/StatusActive';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" />}/>
        <Route exact path="/not-found" element={ <NotFound /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/active" element={ <Active /> } />
        <Route exact path="/status-active/:id" element={ <StatusActive /> } />
      </Routes>
    </div>
  );
}

export default App;
