const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "."))); // Serve static files from the current directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "Q16.html")); // Send the HTML file
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
