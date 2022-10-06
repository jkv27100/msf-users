require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = (URI) => {
  try {
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Is Connected...");
  } catch (error) {
    console.log(`could not connect to DB : ${error.message}`);
  }
};

module.exports = connectDB;
