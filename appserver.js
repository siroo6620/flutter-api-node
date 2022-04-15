const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");

const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));

const student = { name: "Abubakar", age: 21 };

app.get("/", (req, res) => {
  res.json({ message: student });
});

app.get("/message", (req, res) => {
  res.send("This is a response from the server");
});

app.listen(port, () => {
  console.log(`Server is running on this  ${port}...`);
});

