////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
const mongoose = require("./connection")
const {Schema, model} = mongoose

////////////////////////////////////////////////
// Model
////////////////////////////////////////////////
const chowderSchema = new Schema({
    name: String,
    image: String,
    origin: String,
    description: String,
    // TODO: Ingredients, Directions
    // ingredients: [String],
    // steps: [String]
}, {timestamps: true})

const Chowder = model("Chowder", chowderSchema)

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = Chowder