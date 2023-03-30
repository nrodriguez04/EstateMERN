import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
    const [propertyData, setPropertyData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        image: '',
    });

    const handleChange = e => {
        setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Post the property data to the server
          const response = await axios.post('http://localhost:5000/properties', propertyData);
          console.log(response);
      
          // If an image is provided, upload it
          if (image) {
            const imageData = new FormData();
            imageData.append('image', image);
      
            // Use the property ID returned from the server to upload the image
            await axios.post(`http://localhost:5000/properties/${response.data._id}/upload`, imageData);
          }
      
          // Clear the form and reset the state
          setPropertyData({
            title: '',
            description: '',
            price: '',
            location: '',
            image: '',
          });
          setImage(null);
        } catch (err) {
          console.error(err);
        }
      };
      

    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    };

    return (
        <div>
        <h2>Add a Property</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={propertyData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bedrooms:
            <input
              type="number"
              name="bedrooms"
              value={propertyData.bedrooms}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bathrooms:
            <input
              type="number"
              name="bathrooms"
              value={propertyData.bathrooms}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={propertyData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />
          <button type="submit">Add Property</button>
        </form>
      </div>
    );
};

export default AddProperty;
