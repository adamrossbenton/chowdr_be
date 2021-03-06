////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
require("dotenv").config()
const mongoose = require("mongoose")
const {DB_URL} = process.env

////////////////////////////////////////////////
// DB
////////////////////////////////////////////////
mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("Connected"))
    .on("close", () => console.log("Disconnected"))
    .on("error", (err) => console.log(err))

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = mongoose