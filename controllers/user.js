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

// Index/test
router.get("/", async (req,res) => {
    try {
        res.json(await User.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Clear users
router.delete("/:id", async (req,res) => {
    try {
        res.json(await User.findByIdAndRemove(req.params.id))
    } catch (err) {
        res.response(400).json(err)
    }
})

// Signup

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = router