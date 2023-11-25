import './App.css';
import React from 'react';
import { Router, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" element={<Homepage/>} />
    </Router>
    </div>
  );
}

export default App;
