var inquirer = require('inquirer');
var mySql = require('MySql');


var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'bamazon' //--------change to intended database!!!---------
});


connection.connect(function(err) {
    if (err) throw err;
    console.log('you are connect as id ' + connection.threadId);
})