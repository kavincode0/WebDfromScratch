const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const port = 80

    mongoose.connect('mongodb://127.0.0.1:27017/contactData');
    
    //   defining schema
  const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
    email: String,
    address: String,
    desc: String
  })
  
  const Contact = mongoose.model('Contact', contactSchema);


// Express specific
app.use(express.static('static'))//serving static files
app.use(express.urlencoded())

// Pug specific
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views'))//set the views directory

//Endpoints
app.get('/', (req, res)=>{
    // const params = {'title':""}
 res.status(200).render('home.pug');
})
app.get('/contact', (req, res)=>{
    // const params = {'title':""}
 res.status(200).render('contact.pug');
})
app.post('/contact', (req, res)=>{
  var mydata = new Contact(req.body);
  mydata.save().then(() =>{
    res.send("<h1>your details have been accepted</h1>")
  }).catch(()=>{
    res.status(400).send("Sorry, something went wrong, resubmit")
  });
//  res.status(200).render('contact.pug');
})
// app.post('/', (req, res)=>{
//     console.log(req.body)
//     // const params = {}
//     res.status(200).render('index.pug');
// })
app.listen(port, ()=>{
  console.log(`The application started successfully on port ${port}`) 
})