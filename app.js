var express = require('express');
app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/api/whoami', function(req, res) {

	var address = req.ip;
		if(address.substr(0,7) === "::ffff:"){
			address = address.substr(7);
		}
	var language = req.headers['accept-language'].split(',')[0];
	var opSys =  req.headers['user-agent'].match(/\([^\(\)\n]*\)/)[0].split("(")[1].split(")")[0];

	res.render('whoami', {addressVar: address,
						languageVar: language,
						osVar: opSys});
});

app.get('*', function(req, res) {
	res.render('home');
});

var port = process.env.PORT || 3000;
  app.listen(port);

// app.listen(3000, '127.0.0.1', function() {
// 	console.log('Server has started!');
// });
