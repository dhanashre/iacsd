var express = require('express');
var app = express();

var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'shivani',lastName:'joshi',age:43},
            {firstName:'sai',lastName:'patil',age:43},
            {firstName:'anju',lastName:'datar',age:28},
            {firstName:'ganesh',lastName:'patil',age:25},
            {firstName:'mnikita',lastName:'joshi',age:23}
      ];
  res.send(customers);
};


app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8077", host, port)
})