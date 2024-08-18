const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.post('/cards', async (req, res) => {
    const { title, description } = req.body;
    const id = new mongoose.Types.ObjectId().toString();

    try {
        const card = new Card({ id, title, description });
        await card.save();
        res.status(201).send(card);
    } catch (error) {
        res.status(400).send({ error: 'Failed to create card' });
    }
});

router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find({});
        res.status(200).send(cards);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve cards' });
    }
});

router.get('/cards/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const card = await Card.findOne({ title });
        if (!card) {
            return res.status(404).send({ error: 'Card not found' });
        }
        res.status(200).send(card);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve card' });
    }
});

module.exports = router;