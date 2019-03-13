const express = require('express')
const app = express()
app.set('view engine', 'ejs')
let request = require('request');

let apiKey = 'b54f61e034024fb9d77f7c46f05b78c2';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});


app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
