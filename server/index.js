'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3938;

mongoose.connect('mongodb://localhost:27017/musicfy', {useNewUrlParser: true}, (err, res) => {
	if (err) {
		throw err;
	}else{
		console.log("La conexión esta correcta");

		app.listen(port, function(){
			console.log("Servidor escuchando en http://localhost:" + port);
		});
	}
});