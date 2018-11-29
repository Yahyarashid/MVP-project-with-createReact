var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('./database-mongo');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/h', function (req, res) {
	console.log('i get message')

	items.selectAll(function(err,items){
		res.send(items)



		
})


	//res.send('hello iam there')

});


app.post('/h', function(req,res) {

	items.saveData(req.body);
	res.send('world is amazing');
});

app.post('/delete',function(req,res){

	//items.Item.deleteOne( { "id" : 4 } );
	//items.Item.remove( { posts: "hello world this is me you can post here"} )
	items.Item.deleteOne({ id:req.body.id}, function (err) {
		if(err){
			console.log(err)
		}
	});

	// items.selectAll(function(err,items){
	// res.send(items)
	res.send('hi there')
})


// app.post('/sass.html',function(req,res){
// 	items.selectAll(function(err,items){
// 		res.send(items)
// })




////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
var port = process.env.PORT||5000 
app.listen(port, function() {
  console.log('listening on port 5000! react is using 3000');
});

