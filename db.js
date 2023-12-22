const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://taraansh11:taraansh11@cluster0.8uveyye.mongodb.net/iNotebook?retryWrites=true&w=majority"
      // "mongodb://127.0.0.1:27017/iNotebook"
    );
    console.log(`Connected to MongoDB database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MngoDb: ${error}`);
  }
};

module.exports = connectToMongo;
