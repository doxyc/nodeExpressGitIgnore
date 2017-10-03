const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('hi practice 1!')
});

app.get('/', function(req, res) {
  res.send("hi practice 1!")
})
