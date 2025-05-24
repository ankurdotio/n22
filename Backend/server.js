// server start karne 
// Database se connect krna

const app = require("./src/app")
const connectDB = require("./src/db/db")


connectDB() // db connect kiya


app.listen(3000, () => {
    console.log("server is running on port 3000")
})