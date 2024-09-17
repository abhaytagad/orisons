const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/contact', async (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;

    try {
        
        const contact = new Contact({
        name,
        email,
        message,
        });

        // Save the document to the database
        await contact.save();

        // Respond with success message
        res.status(200).json({ msg: 'Message sent successfully' });
    } catch (error) {
        // Log and respond with error message
        console.error(error.message);
        res.status(500).send('Server error');
    }
  });




module.exports = router;
