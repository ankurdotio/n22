const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect('mongodb://localhost:27017/n22')
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
        });
}


module.exports = connectDB;