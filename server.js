////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
require("dotenv").config()
const {DB_URL, PORT, SECRET} = process.env
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const session = require("express-session")
const MongoStore = require("connect-mongo")

const Chowder = require("./models/chowder")
const ChowdersRouter = require("./controllers/chowders")
const UserRouter = require("./controllers/user")

const app = express()

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/chowders", ChowdersRouter)
app.use("/user", UserRouter)
app.use(session({
    secret: SECRET,
    store: MongoStore.create({mongoUrl: DB_URL}),
    saveUnitialized: true,
    resave: false
}))

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////
// Test
app.get("/", (req,res) => {
    res.send("hello chowdr")
})

////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////
app.listen(PORT, () => console.log(`On ${PORT}`))