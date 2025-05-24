const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect("mongodb://localhost:27017/n22")
        .then(() => {
            console.log("DB connected")
        })
        .catch((err) => {
            console.log("DB not connected")
        })
}

module.exports = connectDB; // connectDB ko export kiya