const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API RUNNING!");
});

app.get("/api/all", (req, res) => {
  try {
    res.json(JSON.parse(fs.readFileSync("./src/portfolio.json")));
  } catch (error) {
    res.sendStatus(500, error);
  }
});

app.post("/api/updateData", (req, res) => {
  try {
    const updatedData = req.body;
    const data = JSON.parse(fs.readFileSync("./src/portfolio.json"));

    for (const [key, value] of Object.entries(updatedData)) {
      // Update fields if they exist in the updated data
      if (value) {
        data[key] = value;
      }
    }

    fs.writeFileSync("./src/portfolio.json", JSON.stringify(data));

    res.sendStatus(200).send("success");
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
