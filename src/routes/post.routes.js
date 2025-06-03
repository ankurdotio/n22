const express = require("express")
const router = express.Router()
const postController = require("../controllers/post.controller")


router.post("/create-post", postController.createPost)


module.exports = router