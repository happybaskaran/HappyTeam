const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/Views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  var now = new Date().toString();
  let log = `${now} : ${req.method} ${req.url}`
  console.log(log);
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log('Uanble to append to server.log.');
    }
  });
  next();
});

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
})

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

app.get('/project',(req,res)=>{
  res.render('project.hbs',{
    header:'to Project Page',
    Heading:'Here you are in my Project Page'
  });
});

app.get('/contactus',(req,res)=>{
  res.send('Contact us Page');
})

app.get('/bad',(req,res)=>{
  res.send({
    error:"unable to get the required page",
    handler:"Try to refresh the page"
  });
});

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
