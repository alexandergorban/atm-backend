const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const atmRouter = express.Router();

atmRouter.route('/atm')
    .get(function (req, res) {
        let responseJson = {cardID: 1, cardNum: 1234432112344321, cardHolder: "Name Surname"};
        res.json(responseJson)
    });

app.use('/api', atmRouter);

app.get('/', function (req, res) {
    res.send('welcome to API');
});

app.listen(port, function () {
    console.log('Gulp is running app on PORT: ' + port);
});