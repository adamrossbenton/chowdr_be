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

// Test
router.use("/login", (req,res) => {
    res.send({
        token: test123
    })
})

// Signup

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = router