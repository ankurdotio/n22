const postModel = require("../models/post.model")


async function createPost(req, res) {
    const { imageUrl, caption } = req.body; // body se data le liya

    const post = await postModel.create({ imageUrl, caption }) // post model se data create kiya

    res.status(201).json({
        message: "Post created successfully",
        post
    }) // response bhej diya
}

async function fetchPosts(req, res) {

    const posts = await postModel.find()

    res.status(200).json({
        message: "posts fetch successfully",
        posts
    })

}

module.exports = { createPost, fetchPosts }