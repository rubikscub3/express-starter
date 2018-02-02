const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

var db;

MongoClient.connect('mongodb://aatir:rubikscub3@ds213688.mlab.com:13688/quotes', (err, database) => {
	if (err) {
		return console.log(err);
	}
	db = database.db('quotes');
	
	app.listen(3000, () => {
		console.log('listening on 3000');
	})
})


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/getdata', (req, res) => {
	var data = db.collection('quotes').find().toArray((err, results) => {
		console.log(results);
		res.render('index.ejs' , {quotes : results})
	});
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
	  if (err) return console.log(err)
	  console.log('saved to database')
	  res.redirect('/')
	})
  })

