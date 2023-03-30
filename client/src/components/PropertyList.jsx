import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    try {
      const response = await axios.get('http://localhost:5000/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  }

  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            {property.address} - {property.price} - {property.bedrooms} bedrooms - {property.bathrooms} bathrooms
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
