var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

//allows the controller to only have to specify the router after '/api/posts'
app.use('/api/posts', require('./controllers/api/posts.js'));
app.use(require('./controllers/static'));

var port =  (process.argv[2] || 3000);

app.listen(port, function () {
	console.log('Server listening on port: ', port);
})