var express = require('express');
var app = express();
app.get('/api/:operation/:num1/:num2', function (req, res) {
    var operation = req.params.operation;
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    if (operation == "dodaj") {
        var result = num1 + num2;
        res.send("".concat(num1, " + ").concat(num2, " = ").concat(result.toString()));
    }
    if (operation == "usun") {
        var result = num1 - num2;
        res.send("".concat(num1, " - ").concat(num2, " = ").concat(result.toString()));
    }
    if (operation == "podziel") {
        var result = num1 / num2;
        res.send("".concat(num1, " / ").concat(num2, " = ").concat(result.toString()));
    }
    if (operation == "pomnoz") {
        var result = num1 * num2;
        res.send("".concat(num1, " * ").concat(num2, " = ").concat(result.toString()));
    }
});
app.listen(3000);
