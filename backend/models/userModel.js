const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  confirm_password: {type: String},
  token: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User
