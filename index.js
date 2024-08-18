const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cardRoutes = require('./routes/cards');

const app = express();

const uri = 'mongodb+srv://Kunwgh:<Kunwgh@123>@cluster0.p5lqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(cardRoutes);

app.get('/ping',(req, res) =>{
    res.send('Server is running');
});

const PORT = process.env.PORT || 3334;

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});