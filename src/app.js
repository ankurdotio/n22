const express = require("express")
const postModel = require("./models/post.model")
const postRoutes = require("./routes/post.routes")

const app = express()
app.use(express.json())

app.use('/', postRoutes)



module.exports = app