const userModel = require("../models/user.model")
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function hashString(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

async function registerUser(req, res) {
    const { username, password } = req.body;
    const hashedPassword = hashString(password);

    const user = await userModel.create({
        username: username,
        password: hashedPassword
    })


    res.status(201).json({
        message: "User registered successfully",
        user
    })
}

async function loginUser(req, res) {
    // password = test
    const { username, password } = req.body;

    const user = await userModel.findOne({ username })

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const hashedPassword = hashString(password);

    if (user.password !== hashedPassword) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }


    const token = jwt.sign({ userId: user._id }, "secretkey")


    res.status(200).json({
        message: "Login successful",
        user,
        token
    });

}


module.exports = {
    registerUser,
    loginUser
}