const path = require('path');

//create array variables that will hold data

//set routes for getting data

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