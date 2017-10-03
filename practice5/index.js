const express = require('express');
const app = express();

app.listen(3000, ()=>{
  console.log("hi practice 5!")
});

app.get('/', (req,res)=>{
  res.send('hi practice 5!')
});
