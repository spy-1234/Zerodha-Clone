const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.MONGO_URI || 3001

app.listen(PORT, ()=> {
    console.log("Server is running")
    mongoose.connect(PORT)
    console.log("Connected to MongoDB")
})