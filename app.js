// Resources 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Setup Dotenv file
require('dotenv').config();

// Set View Engine
app.set('view engine', 'ejs');

// Setup Body Parser for POST Requests
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

let items = ['Buy food', 'Cook food', 'Eat food'];

//  Get Date
app.get('/', (req, res) => {
    
    let today = new Date();
    // today = today.getDay();
    // console.log(today);
    
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    let day = today.toLocaleDateString('en-US', options);
    
    res.render('list', {kindOfDay: day, newListItems: items});

})

app.post('/', function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    
    res.redirect('/');    
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`)
});