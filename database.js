const { Client } = require('pg')
const connection = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'bismillah',
    database: 'express',
    port: 5432,
})
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;


// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'',
// 	database:'express'
// });
// connection.connect(function(error){
// 	if(!!error) {
// 		console.log(error);
// 	} else {
// 		console.log('Connected..!');
// 	}
// });

// module.exports = connection;