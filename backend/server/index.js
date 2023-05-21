const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Image Upload API",
      version: "1.0.0",
      description: "API to upload an image and get the image URL",
    },
  },
  apis: [__filename], // Current file path
};
const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Endpoint for Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const formData = new FormData();
    formData.append("key", "1daf95afec18702530cb2be9fb520593"); // Replace with your ImgBB API key
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

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
