const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect to MongoDB..."); // 👈 add this

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected"); // 👈 this should print
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;