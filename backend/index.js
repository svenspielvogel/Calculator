const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const service = require("./src/service");

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const result = service.add(num1, num2);
  res.json({ result });
});

app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  const result = service.subtract(num1, num2);
  res.json({ result });
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = service.multiply(num1, num2);
  res.json({ result });
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  const result = service.divide(num1, num2);
  res.json({ result });
});


// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
