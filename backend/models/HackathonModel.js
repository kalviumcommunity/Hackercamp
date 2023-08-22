const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const hackathonSchema = new Schema({
  Name: { type: String, required: true },
  Mode: { type: String, required: true },
  Address: { type: String, required: true },
  Poster: { type: String, required: true },
  Organisation: { type: String, required: true },
  Date: { type: String, required: true },
  Timings: { type: String, required: true },
  PaymentMode: { type: String, required: true },
  Themes: { type: [String], required: true },
  Description: { type: String, required: true },
  Details: { type: String, required: true },
  Reg
});



const Hackathon = mongoose.model("hackathon", hackathonSchema);
module.exports = Hackathon;
