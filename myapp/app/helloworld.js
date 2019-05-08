var express = require('express')
var app = express();

app.get("/", function(req, res) {
  res.send("Goodbye World");
});

app.listen(3000);
