const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

let values = {
  power: "OFF",
  comp: "OFF",
  temp: "99",
  blow: "99",
  pressure: "99",
};

app.get("/", (req, res) => {
  console.log("GET REQ");
  res.send("GETTING REQUEST SUCCESSFULLY");
});

app.get("/data", (req, res) => {
  res.send(values);
});

app.post("/post", (req, res) => {
  values.power = req.body.power;
  values.comp = req.body.comp;
  values.temp = req.body.temp;
  values.blow = req.body.blow;
  values.pressure = req.body.pressure;
  res.send("posted successfully");
});

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
  console.log("http://localhost:3000");
});
