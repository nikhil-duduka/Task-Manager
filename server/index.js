const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Manager API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
