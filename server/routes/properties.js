const express = require('express');
const router = express.Router();
const cloudinary = require('../server');
const Property = require('../models/Property');

// Create a new property
router.post('/', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(400).json({ error: 'Failed to add property' });
  }
});

// Get all properties
router.get('/', async (req, res) => {
    // Your code here
});

// Get a specific property
router.get('/:id', async (req, res) => {
    // Your code here
});

// Update a property
router.put('/:id', async (req, res) => {
    // Your code here
});

// Delete a property
router.delete('/:id', async (req, res) => {
    // Your code here
});

// Upload image route
router.post('/:id/upload', async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.body.image, {
        upload_preset: 'your_upload_preset',
      });
  
      const property = await Property.findByIdAndUpdate(req.params.id, {
        image: result.secure_url,
      });
  
      res.json({ success: true, message: 'Image uploaded successfully' });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ success: false, message: 'Error uploading image' });
    }
  });
  

module.exports = router;
