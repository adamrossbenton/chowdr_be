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

// Login
router.get("/login", async (req,res) => {
    try {
        res.json(await User.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post("/login", (req,res) => {
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
                res.send({token: "test123"})
            } else {
                res.send("Incorrect password")
            }
        }
    })
})

// Signup

//Logout

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = router