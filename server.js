const express = require('express');
const env = require('dotenv').config();
const connectDB = require("./utils/db")
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Connect to datatbase
connectDB()


// Routes
const trackRoutes = require('./routes/trackRoutes')


app.use('/api/tracks', trackRoutes)



// catch all routes
app.all("*", (req, res, next) => {
    const error = new Error(`Not Found ${req.originalUrl}`)
    res.status(404)
    next(error)
});



app.use((err, req, res, next) => {
    
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)

    res.json({
        code: statusCode,
        message: err.message,
        stack: err.stack,
    });
});




// port
app.listen(port, () => console.log(`Backend server running on port ${port}`));