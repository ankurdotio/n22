const userModel = require("../models/user.model")


async function register(req, res) {
    const user = await userModel.create({
        username: req.body.username,
        password: req.body.password
    })

    res.status(201).json({
        message: "User created successfully",
        user
    })
}

async function login(req, res) {
    const { username, password } = req.body

    const user = await userModel.findOne({
        username,
    })

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    if (user.password !== password) {
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    res.status(200).json({
        message: "Login successful",
        user
    })

}

module.exports = { register, login }