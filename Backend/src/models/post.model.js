const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    imageUrl: String,
    caption: String,
    likeCount: {
        type: Number,
        default: 0
    }
})


const postModel = mongoose.model('post', postSchema)

module.exports = postModel // export kiya post model ko