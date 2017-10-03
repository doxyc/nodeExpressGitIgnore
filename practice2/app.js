const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('hi practice 2!')
})

app.get('/', (req,res)=>{
  res.send('hi practice 2!')
})
