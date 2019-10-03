const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.json()); // parse incoming Request Object as a JSON Object

// Home route
app.get("/", (req, res) => {
  res.send("<h1>A very basic Express app deployed on Zeit Now</h1>");
});

// Mock APIs
app.get("/technologies", (req, res) => {
  res.json([
    { name: "React", maintainer: "Facebook" },
    { name: "Angular", maintainer: "Google" }
  ]);
});

app.post("/technology", (req, res) => {
  const { name, maintainer } = req.body;

  res.send({ status: "Technology added", name, maintainer });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is ready on port ${port}`);
});
