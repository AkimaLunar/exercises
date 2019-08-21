// (1) Import the Express.js library
const express = require('express');
const morgan  = require('morgan');
const fs = require('fs');

const getCarLabel = require('./helpers/getCarLabel');
const getRandomName = require('./helpers/getRandomName');
const getFizzBuzz = require('./helpers/getFizzBuzz');

// (2) Initialize the app
const app = express();

// (7) Add logger
//     https://www.npmjs.com/package/morgan/v/1.1.1
app.use(morgan('dev'));

// (4) Set the render engine to EJS
app.set('view engine', 'ejs');
// (4.1) Express template engines:
//       https://expressjs.com/en/guide/using-template-engines.html
// (4.2) Using Express with EJS
//       https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//       https://ejs.co/#docs

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/car-status', (req, res) => {
    const year = req.query.year;
    const label = getCarLabel(year);
    console.log(req.query.year, label);
    res.render('car-status', { label, year });
});

app.get('/random-person', (req, res) => {
    const payload = req.query.names;
    const name = getRandomName(payload);
    res.render('random-person', { name });
});

app.get('/fizz-buzz', (req, res) => {
    const { numberOne, numberTwo } = req.query;
    const fizzBuzz = getFizzBuzz(numberOne, numberTwo).join(' ');
    res.render('fizz-buzz', { fizzBuzz });
});

app.get('/directory', (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            res.send('Error!' + err);
        }
        if (files) {
            res.render('directory', { files });
        }
    });
});

// (5) Response
//     http://expressjs.com/en/5x/api.html#res

// (6) Request
//     http://expressjs.com/en/5x/api.html#req
// (6.1) Create label

// (3) Define the port
const PORT = 3000;
const PATH = 'localhost';
app.listen(PORT, PATH, () => {
    console.log(`My amazing Express server is running at http://${PATH}:${PORT}.`);
});
