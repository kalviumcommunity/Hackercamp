const mongoose = require("mongoose");

// Establish MongoDB connection
mongoose
  .connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

  const mongoose = require("mongoose");

  // Define the schema
  const hackathonSchema = new mongoose.Schema({
    HackathonName: { type: String },
    HackathonMode: { type: String },
    HackathonAddress: { type: String },
    OrganisationName: { type: String },
    date: { type: String },
    timings:{type: String},
    HackathonDescription: { type: String },
    HackathonDetails: { type: String },
    checkBoxOption: { type: [String] },
    themeOption: { type: [String] },
  });

  // Create the model based on the schema
  const Hackathon = mongoose.model("Hackathon", hackathonSchema);

  module.exports = Hackathon;
