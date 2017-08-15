var inquirer = require('inquirer');
var mySql = require('MySql');


var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'bamazonDB' //--------change to intended database!!!---------
});

// Running this application will first display all of the items available for sale.
// Include the ids, names, and prices of products for sale.
connection.connect(function(err) {
    if (err) throw err;
    console.log('you are connected as id ' + connection.threadId);
    showAll();
});

function showALL() {
    connection.query('SELECT * FROM bamazonDB', function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

//The app should then prompt users with two messages.

//* The first should ask them the ID of the product they would like to buy.
//* The second message should ask how many units of the product they would like to buy.

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt([{
            name: "itemSelection",
            type: "input",
            message: "What is the item identification number of the product you would like to purchase today?"
        }])
        .then(function(answer) {
            var query = "SELECT item_id, product_name FROM bamazonDB WHERE ?";
            connection.query(query, { item_id: answer.item_id }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Item ID: " + res[i].item_id + " && Product: " + res[i].product_name);
                }
                runSearch();
            });
        });
};

//* The second message should ask how many units of the product they would like to buy.



// Once the customer has placed the order, your application should check if your
// store has enough of the product to meet the customer's request.If not, the app
// should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
// However, if your store _does_ have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.