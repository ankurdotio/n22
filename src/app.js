const express = require('express');
const userModel = require("./models/user.model")


const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World');
})


app.post('/create-user', async (req, res) => {

    const user = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        age: req.body.age
    })

    res.status(201).json({
        message: "User created successfully",
        user: user
    })

})


app.get('/get-users', async (req, res) => {
    const users = await userModel.findOne({
        email: "test@test.com"
    })

    res.status(200).json({
        message: "Users fetched successfully",
        users: users
    })
})


app.patch("/update-user", async (req, res) => {

    await userModel.findOneAndUpdate({
        username: "test_2"
    }, {
        email: "test@test.com"
    })

    res.status(200).json({
        message: "User updated successfully"
    })
})

app.delete('/delete-user', async (req, res) => {

    await userModel.findOneAndDelete({
        username: "test"
    })

    res.status(200).json({
        message: "User deleted successfully"
    })
})


module.exports = app

