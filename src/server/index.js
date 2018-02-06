var express = require('express');
var app = express();
app.set('view engine', 'html');
app.set('views', './public');
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Server started at port 3000');
});

app.get('/', function (req, res) {
    res.render('index');
});
