// server create
// routes use krna
const express = require('express');
const postRoutes = require("./routes/post.routes")
const cors  = require('cors');


const app = express(); // server create ho gaya
app.use(cors()) // cors use kiya
app.use(express.json()) // body se data lene ke liye    


app.use('/', postRoutes)

module.exports = app; // app ko export kiya