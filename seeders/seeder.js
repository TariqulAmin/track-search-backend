const mongoose = require("mongoose");
const env = require('dotenv').config();
const connectDB = require("../utils/db")
const admins = require("../data/tracks")
const Track = require("../models/trackModel")


connectDB()


const importData = async () => {
    try {
        await Track.insertMany(admins)

        console.log("Data Imported")
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)

    }
}

const destroyData = async () => {
    try {
        await Track.deleteMany()

        console.log("Data Destroyed")
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)

    }
}


if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}
