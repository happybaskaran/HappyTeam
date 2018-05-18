const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const bodyParser = require('body-parser');
const sayIt = require('./Text2Speech.js');

var path = require('path');

let port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use("/public/assets",express.static(__dirname+'/public/assets'));
app.use("/public/images",express.static(__dirname+'/public/images'));

app.get('/',(req,res)=>{
  res.render('index.hbs');
});

app.get('/explore',(req,res)=>{
  res.render('explore.hbs',{
    Heading:"Explore Cool Stuffs"
  });
});

app.get('/listenit',(req,res)=>{
  res.render('listenit.hbs',{
    Heading:"Ease your Reading",
    BHeader:"Make it Simple",
    UserContent:""
  });
});

app.get('/jollyday',(req,res)=>{
  res.render('jollyday.hbs',{
    Heading:"Explore World",
    BHeader:"Travel brings relationship"
  });
});

app.post('/listenit',(req,res)=>{
  let texttospeak = req.body.text2speech;
  let voices = [
      { voice: 'Alex', text: texttospeak }
  ]
  //console.log(texttospeak);
  res.render('listenit.hbs',{
    Heading:"Ease your Reading",
    BHeader:"Make it Simple",
    UserContent: texttospeak,
    userResult: sayIt.sayAll(voices)
  });
});

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
