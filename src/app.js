const express = require('express');
const app = express();
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/post.routes")
app.use(express.json());

app.use('/', userRoutes)
app.use('/', postRoutes);
module.exports = app;   