const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;

MongoClient.connect('mongodb://aatir:rubikscub3@ds213688.mlab.com:13688/quotes', (err, database) => {
	if (err) {
		return console.log(err);
	}
	db = database
	
	app.listen(3000, () => {
		console.log('listening on 3000');
	})
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})	

app.post('/quotes', (req, res) => {
	res.send(req.body);
})


