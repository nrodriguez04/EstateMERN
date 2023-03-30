import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import AddProperty from './components/AddProperty';
import axios from 'axios';

function App() {
  const [properties, setProperties] = useState([]);

  async function getProperties() {
    try {
      const response = await axios.get('http://localhost:5000/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  }

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" exact element={<PropertyList properties={properties} />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
