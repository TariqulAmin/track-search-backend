const mongoose = require('mongoose')

const TrackSchema = new mongoose.Schema({

    title: {
        type: String,
        reqiured: true
    },
    artist: {
        type: String,
        reqiured: true
    },
    artwork: {
        type: String,
        reqiured: true
    },
    url: {
        type: String,
        reqiured: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: false,
    },
})


const Track = mongoose.model('Track', TrackSchema)

module.exports = Track