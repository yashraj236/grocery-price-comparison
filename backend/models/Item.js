const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    platforms: [
        {
            platform: String,
            price: Number,
            deliveryTime: String,
            discount: String,
        },
    ],
});

module.exports = mongoose.model('Item', itemSchema);