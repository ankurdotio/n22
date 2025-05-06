const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/n22")
    .then(() => {
        console.log("Connected to MongoDB");
    })

const userSchema = new mongoose.Schema({

    username: String,
    email: String,
    age: Number,

})


const userModel = mongoose.model("user", userSchema)


module.exports = userModel