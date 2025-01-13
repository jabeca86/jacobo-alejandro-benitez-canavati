// This file is just for reference, not an actual App script

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    img_profile: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    height: Number,
    length: Number,
    width: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const tokenSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    token: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = {
    User: mongoose.model('User', userSchema),
    Product: mongoose.model('Product', productSchema),
    Token: mongoose.model('Token', tokenSchema)
};
