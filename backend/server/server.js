const express = require("express");
const app = express();
const port = 2003;
const cors = require("cors");
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage() });
const axios = require("axios");
const FormData = require("form-data");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

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

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hackathon API",
      version: "1.0.0",
      description: "API to manage hackathons",
    },
  },
  apis:[__filename], // Specify the file path where your API routes are defined
};
const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Endpoint for Swagger UI
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerSpec));
// Endpoint for uploading an image
/**
   @swagger
 * /upload:
 *   post:
 *     summary: Upload an image and get the image URL
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imageUrl:
 *                   type: string
 *       400:
 *         description: No image uploaded
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Something went wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

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
