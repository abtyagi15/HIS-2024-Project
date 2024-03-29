const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const {connectToDB} = require('./config/database');
connectToDB();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to our platform');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});