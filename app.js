var express = require('express');
app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(3000, '127.0.0.1', function() {
	console.log('Server has started!');
});