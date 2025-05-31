const userModel = require("../models/user.model")
// Import the built-in 'crypto' module
const crypto = require('crypto');

/**
 * Hashes the input data using SHA-256 algorithm.
 * 
 * @param {string} data - The data to hash.
 * @returns {string} - The resulting hash in hexadecimal format.
 */
function hashData(data) {
    if (typeof data !== 'string') {
        throw new Error('Input data must be a string');
    }

    // Create a SHA-256 hash instance and update it with the data
    const hash = crypto.createHash('sha256').update(data).digest('hex');

    return hash;
}


async function register(req, res) {


    const hash = hashData(req.body.password)


    const user = await userModel.create({
        username: req.body.username,
        password: hash
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

    const hash = hashData(password)

    if (user.password !== hash) {
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