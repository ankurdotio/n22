const postModel = require("../models/post.model")

module.exports.createPost = async (req, res) => {
    const { imageUrl, caption } = req.body

    const post = await postModel.create({
        imageUrl,
        caption
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })
}