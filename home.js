const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var path = require('path');

let port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/Views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/assets'));
app.use(express.static(__dirname+'/public/images'));

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
    BHeader:"Make it Simple"
  });
});

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
