const mongoose = require('mongoose');


function connectDB() {

    mongoose.connect("mongodb://localhost:27017/n22")
        .then(() => {
            console.log("connected to db")
        })
        .catch((err) => {
            console.log("error connecting to db", err)
        })
}

module.exports = connectDB