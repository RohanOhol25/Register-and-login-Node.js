const mongoose = require('mongoose');
async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/authDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}
module.exports = { connectDB };