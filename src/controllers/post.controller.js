const jwt = require('jsonwebtoken');

function createPost(req, res) {

    try {

        const token = req.headers.authorization.split(" ")[ 1 ];

        jwt.verify(token, "secretkey")

        const { imageUrl, caption } = req.body;

        res.status(201).json({
            message: "Post created successfully",
            post: {
                imageUrl,
                caption,
            }
        })
    } catch (err) {
        res.status(401).json({
            message: "Unauthorized access"
        });
    }

}

module.exports = {
    createPost
}