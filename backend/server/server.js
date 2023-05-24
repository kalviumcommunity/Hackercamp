const express = require("express");
const app = express();
const port = 2003;
const cors = require("cors");
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage() });
const axios = require("axios");
const FormData = require("form-data");


const mockedData = require("../../frontEnd/src/components/data.json");

app.use(cors());

app.get("/api/hackathons", (req, res) => {
  res.json(mockedData);
});

app.get("/api/hackathons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredHackathons = mockedData.find(
    (hackathons) => hackathons.id === id
  );
  res.json(filteredHackathons);
});


app.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const formData = new FormData();
    formData.append("key", "3dd3fe88bdc8cdf501df198a423f3dd1"); // Replace with your ImgBB API key
    formData.append("image", req.file.buffer.toString("base64"));

    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    const imageUrl = response.data.data.url;
    console.log(imageUrl);
    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
