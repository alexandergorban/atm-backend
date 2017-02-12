const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/atm-db');

const port = process.env.PORT || 3000;

atmRouter = require('./Routes/atmRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', atmRouter);

verificationRouter = require('./Routes/verificationRoutes');
app.use('/api', verificationRouter);

app.get('/', function (req, res) {
    res.send('welcome to API');
});

app.listen(port, function () {
    console.log('Gulp is running app on PORT: ' + port);
});