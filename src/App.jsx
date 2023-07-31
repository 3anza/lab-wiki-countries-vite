import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={HomePage} />
        {/* Add more routes here if needed */}
        <h1>LAB | React WikiCountries</h1>
      </div>
    </Router>
  );
}

export default App;
