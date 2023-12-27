const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sajib:sajib123@cluster0.beib29z.mongodb.net/");
        console.log(`MongoDB connected successfully`);

    } catch (error) {
        console.log("error", "Database connection failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;
