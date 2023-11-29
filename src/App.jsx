import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx';
import Login from './Components/Login.jsx';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
