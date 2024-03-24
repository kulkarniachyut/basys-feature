const mongoose = require('mongoose');
// const appConfig = require('./appConfig');

const connectDB = async () => {
  try {
    mongoUri = "mongodb+srv://achyutgk:1234567890@basys-free.h3i7agk.mongodb.net/basysdev?retryWrites=true&w=majority"
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
