const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const { connectToDB } = require("./config/database");
connectToDB();

app.use(express.json());

const userRoutes = require("./routes/User");
app.use("/Innovate4All/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to our platform");
});
app.get("/Innovate4All/v1", (req, res) => {
  res.send("Welcome to our platform");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
