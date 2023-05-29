const express = require("express");
const app = express();
const port = 2003;
require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const axios = require("axios");
const FormData = require("form-data");
const Hackathon = require("../models/HackathonModel");
const connection = require('../models/dbConnection')
const apiKey = process.env.API_KEY
app.use(cors());




app.post("/api/hackathons/", upload.single("Poster"), async (req, res) => {
  try {
    // Upload the hackathon poster image
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const formData = new FormData();
    formData.append("key", apiKey); // Replace with your ImgBB API key
    formData.append("image", req.file.buffer.toString("base64"));

    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    const ImageUrl = response.data.data.url;

    // Create a new instance of the Hackathon model
    const hackathon = new Hackathon({
      Name: req.body.Name,
      Mode: req.body.Mode,
      Address: req.body.Address,
      Poster: ImageUrl,
      Organisation: req.body.Organiser,
      Date: req.body.Date,
      Timings: req.body.Timings,
      PaymentMode: req.body.Price,
      Themes: req.body.Themes,
      Description: req.body.Description,
      Details: req.body.Details,
      Slug: req.body.Name.toLowerCase().replace(/\s/g, ""),
    });

    // Save the hackathon to the database
    const savedHackathon = await hackathon.save();

    res.status(200).json(savedHackathon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving hackathon" });
  }
});

app.get("/api/hackathons/", async (req, res) => {
  try {
    const hackathon = await Hackathon.find();
    hackathon
      ? res.json(hackathon)
      : res.status(404).json({ message: "Error while fetching" });
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

app.get("/api/hackathons/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const hackathon = await Hackathon.findOne({ _id: id });
    hackathon
      ? res.json(hackathon)
      : res.status(404).json({ message: "Hackathon not found" });
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});


app.listen(port, async() => {
  try{
    await connection;
    console.log('connected to DB')
  }
  catch(err) {
    console.log('Error occured')
  }
})