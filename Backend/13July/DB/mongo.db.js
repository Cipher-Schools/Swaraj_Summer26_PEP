const mongoose = require("mongoose");

const connectDb = async () => {
  // await mongoose.connect("mongodb://127.0.0.1:27017/users");
  await mongoose.connect("mongodb+srv://swarajworking23_db_user:Vc9xZwiC50f1B6Lj@cluster0.kgf1fmb.mongodb.net/users")
  console.log("DB Connected");
};

module.exports = connectDb;

// Vc9xZwiC50f1B6Lj
// swarajworking23_db_user

// mongodb+srv://swarajworking23_db_user:Vc9xZwiC50f1B6Lj@cluster0.kgf1fmb.mongodb.net/

// mongodb+srv://swarajworking23_db_user:<db_password>@cluster0.kgf1fmb.mongodb.net/