const express = require("express");
const app = express();
const port = 2003;
const cors = require("cors");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const axios = require("axios");
const FormData = require("form-data");
const mockedData = require("../../frontEnd/src/components/data.json");
const mongoose = require("mongoose");
const Hackathon = require("./HackathonModel");
require("dotenv").config();
const apiKey = process.env.API_KEY;
app.use(cors());

const dbURL =
  "mongodb+srv://jeeva:jeeva@cluster0.arulafj.mongodb.net/HackathonDB";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((error) => console.log(error));

app.get("/api/hackathons/", (req, res) => {
  Hackathon.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error retrieving data from MongoDB:", error);
      res.status(500).json({ message: "Error retrieving data" });
    });
});
app.post(
  "/api/hackathons/",
  upload.single("Poster"),
  async (req, res) => {
    try {      
      // Upload the hackathon poster image
      if (!req.file) {
        return res.status(400).json({ message: "No image uploaded" });
      }

      const formData = new FormData();
      formData.append("key",apiKey); // Replace with your ImgBB API key
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
        Slug:req.body.Name.toLowerCase().replace(/\s/g, '')+Math.random()*1
      });

      // Save the hackathon to the database
      const savedHackathon = await hackathon.save();

      res.status(200).json(savedHackathon);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving hackathon" });
    }
  }
);

app.get("/api/hackathons/:slug/:slugValue", (req, res) => {
  const slug = req.params.slug
  const slugValue = req.params.slugValue
  const query = {};
  query[slug] = slugValue
 Hackathon.find(query)
   .then((data) => {
     res.status(200).json(data);
   })
   .catch((error) => {
     console.error("Error retrieving data from MongoDB:", error);
     res.status(500).json({ message: "Error retrieving data" });
   });
});

