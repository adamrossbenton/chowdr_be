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

const Soup = require("./models.soup")
const SoupsRouter = require("./controllers/soups")

const app = express()

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/soups", SoupsRouter)
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