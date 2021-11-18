////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
const express = require("express")
const Chowder = require("../models/chowder")

const router = express.Router()

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////

// TODO: Add user auth middleware

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Index
router.get("/", async (req,res) => {
    try {
        res.json(await Chowder.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Destroy
router.delete("/:id", async (req,res) => {
    try {
        res.json(await Chowder.findByIdAndRemove(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Update
router.put("/:id", async (req,res) => {
    try {
        res.json(await Chowder.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Create
router.post("/", async (req,res) => {
    try {
        res.json(await Chowder.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = router