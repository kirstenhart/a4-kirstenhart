// server.js
// where your node app starts

// init project
const express = require("express");

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// listen for requests :)
const port = process.env.PORT;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});