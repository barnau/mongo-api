var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI', {useNewUrlParser: true})

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRouter')(Book);

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my api!');
});

app.listen(port, () => {
    console.log('Gulp is running my app on PORT: ' + port)
});