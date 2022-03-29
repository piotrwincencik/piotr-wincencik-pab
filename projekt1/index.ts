const express = require('express')  
const app = express()  
app.get('/api/:operation/:num1/:num2', function (req, res) {  

  let operation = req.params.operation;
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  if(operation == "dodaj"){
    let result = num1 + num2;
    res.send(`${num1} + ${num2} = ${result.toString()}`);
  }
  if(operation == "usun"){
    let result = num1 - num2;
    res.send(`${num1} - ${num2} = ${result.toString()}`);
  }
  if(operation == "podziel"){
    let result = num1 / num2;
    res.send(`${num1} / ${num2} = ${result.toString()}`);
  }
  if(operation == "pomnoz"){
    let result = num1 * num2;
  res.send(`${num1} * ${num2} = ${result.toString()}`);
  }
})  
app.listen(3000) 