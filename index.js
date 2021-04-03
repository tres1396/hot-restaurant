const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT  || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create array variables that will hold data
let tableList = [];
let waitList = [];
let customer = []; 

//form submission code 
$('.submit').on('click', function() {
    let newReso = {
        customerName: $('#reserve-name').val().trim(),
        phoneNumber: $('#phone-number').val().trim(),
        customerEmail: $('#customer-email').val().trim(),
        customerID: $('#customerID').val().trim()
    }
    console.log(newReso);
    const currentURL = window.location.origin;
    $.post(`${currentURL}/api/tables`, newReso, (data)=> {
        if (data) {
            alert('Yay! You gots a table!')
        } else {
            alert('uhoh, you are on the wait list')
        }
    })
    //reset form
    $('#reserve-name').val('');
    $('#phone-number').val('');
    $('#customer-email').val('');
    $('#customerID').val('');

    return;
})


//set routes for posting data
app.post('/api/tables', (req, res) => {
    const newTable = req.body;

    console.log(newTable);
  
    tables.push(newTable);
    res.json(newTable);
  });
//set routes for displaying html
function displayHTML(app) {
    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + 'tables.html'));
    });

    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname + 'reserve.html'));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + 'tables.html'));
    });
}
//ust jQuery to run AJAZ calls to get & post data

//module exports
module.exports = displayHTML();
