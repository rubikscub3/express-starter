const express = require('express');
const app = express();

app.listen(3000,function(){
	console.log('Listening to PORT 3000');
})


app.get('/', function (request, response) {
  console.log('Index hit');
})


