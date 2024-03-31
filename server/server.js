const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set the base URL for all requests
const baseURL = process.env.BASE_URL;

// Middleware to parse JSON request body
app.use(express.json());
// Use the cors middleware
app.use(cors());

app.get('/:query', async (req, res) => {
    const { query } = req.params;
    const apiKey = process.env.API_KEY;
    try {
        const response = await axios.get(`${baseURL}/${query}?key=${apiKey}`);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
