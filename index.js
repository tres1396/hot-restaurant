const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create array variables that will hold data
let tableList = [];
let waitList = [];
let customer = [];





//set routes for posting data
app.post('/api/tables', (req, res) => {
    const newTable = req.body;

    console.log(newTable);

    tableList.push(newTable);
    res.json(newTable);
});

//set routes for displaying html
function displayHTML(app) {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname, 'tables.html'));
    });

    app.get('/reserve', function (req, res) {
        res.sendFile(path.join(__dirname, 'reservation.html'));
    });
};

//module exports
module.exports = displayHTML(app);

//starts the server

app.listen(PORT, () => console.log(`app now listenting on PORT: ${PORT}`));