import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()


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
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)

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
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )


    res.cookie("token",token)
    
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

export async function me(req,res){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }


    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

       return res.status(200).json({
            message: "User fetched successfully",
            user: {
                id: decoded.id
            }
        })  
    }catch(err){

        res.status(401).json({
            message: "Unauthorized"
        })
        
    }
}


