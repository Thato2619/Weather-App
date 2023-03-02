import express from "express";

const express = require('express');
const request = require('request');

const app = express();

app.use(express.json()); 
app.use(request.json()); //use request within json package

app.listen(3000, ()=>{
    console.log("Connected!")
})

app.get('/', (req,res) => {
    let city = req.query.city;
    const request = require('request');
request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1745f274f772287c0d082209965c8ef`, //request api by using HTTP get method
function (error, response, body) {
     let data = JSON.parse(body)
    if(response.statusCode === 200) {
        res.send(`The weather in your city "${city}" is "${body.list[0].weather[0].description}"`) //response to the request from the api
    }
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

})

app.listen(3000, () => console.log('server started on port 3000'));

