const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const { connectToDB } = require("./config/database");
connectToDB();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(cors("http://localhost:3000"));	

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

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
