const asyncHandler = require('express-async-handler')
const AppResponse = require('../utils/app.response')
const Track = require("../models/trackModel")

const searchTracks = asyncHandler(async (req, res) => {
    try {
        const seachText = req.query.searchText || ""
        const tracks = await Track.find({ title: { $regex: seachText, $options: "i" } })
        const response = new AppResponse("Success", tracks);
        return res.status(200).json(response);
    } catch (error) {
        res.status(500)
        throw new Error("Internal Server error")
    }
})

module.exports = {
    searchTracks,
}