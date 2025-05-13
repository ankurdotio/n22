const express = require("express")
const postModel = require("./models/post.model")


const app = express()
app.use(express.json())


app.post('/create-post', async (req, res) => {

    const { imageUrl, caption } = req.body

    const post = await postModel.create({
        imageUrl,
        caption
    })

    res.status(201).json({
        message: "post created",
        post
    })

})


module.exports = app