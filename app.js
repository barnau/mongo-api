var express = require('express');
var mongoose = require('mongoose')
var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router(); 

bookRouter.route('/Books')
    .get((req, res) => {
        var responeseJson = { hello: "This is my api"};
        res.json(responeseJson);
    });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my api!');
});

app.listen(port, () => {
    console.log('Gulp is running my app on PORT: ' + port)
});