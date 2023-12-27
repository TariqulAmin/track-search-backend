const express = require('express')
const router = express.Router()

const {
    searchTracks,
    detailsTracks
} = require('../controller/trackController')

router.get("/", async (req, res) => {
    res.send("Hello")
})
router.get("/search", searchTracks)
router.get("/search/:id/details", detailsTracks)

module.exports = router