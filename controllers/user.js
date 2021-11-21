////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
const express = require("express")
const bcrypt = require("bcryptjs")
const User = require("../models/user")
const Chowder = require("../models/chowder")

const router = express.Router()

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Show
router.get("/", async (req,res) => {
    try {
        res.json(await User.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Login
router.post("/", (req,res) => {
    console.log(req.body)
    const {username, password} = req.body
    User.findOne({username}, (err, user) => {
        if (!user) {
            console.log("no user")
        } else {
            console.log(user)
            const result = bcrypt.compareSync(password, user.password)
            console.log(result)
            if (result) {
                res.send({token: "tokentime"})
            } else {
                res.send("Incorrect password")
            }
        }
    })
})

// Signup
router.post("/", (req,res) => {
    try {
        res.json(await User.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Logout is handled client-side by clearing token from localstorage

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = router