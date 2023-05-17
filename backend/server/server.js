const mockedData = require("../../frontEnd/src/components/data.json");
const express = require("express");
const app = express();
const port = 2003;

app.use((req, res, next) => {
  const allowedOrigins = "http://localhost:1002";
  const origin = req.headers.origin;
  if (allowedOrigins === origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  next();
});

app.get('/api/hackathons', (req, res) => {
  res.json(mockedData)
})

app.get("/api/hackathons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredHackathons = mockedData.find(
    (hackathons) => hackathons.id === id
  );
  res.json(filteredHackathons);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
