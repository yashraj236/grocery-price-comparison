const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Fetch all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new item
router.post('/', async (req, res) => {
    const item = new Item(req.body);
    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;