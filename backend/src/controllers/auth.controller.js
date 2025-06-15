import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const JWT_SECRET = "dfb828bb2bf78502b2c49308097db6cd7ad00d8edf2299ede56b85199ea9397d"


export async function registerUser(req, res) {

    const { username, password } = req.body

    const isUserExists = await userModel.findOne({ username })

    if (isUserExists) {
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        password: hashPassword
    })

    const token = jwt.sign(
        { id: user._id },
        JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username
        },
        token
    })

}

export async function loginUser(req, res) {

    const { username, password } = req.body

    const user = await userModel.findOne({ username })

    if (!user) {
        return res.status(400).json({
            message: "In valid username or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "In valid username or password"
        })
    }

    const token = jwt.sign(
        { id: user._id },
        JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.status(200).json(
        {
            message: "User logged in successfully",
            user: {
                id: user._id,
                username: user.username
            },
            token
        })

}


