const mongoose = require('mongoose')
require('dotenv').config();
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lxv3d.mongodb.net/MERN_AUTH?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = connectDB;