var inquirer = require('inquirer');
var mySql = require('MySql');
var delayed = require('delayed');


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
    //  console.log('you are connected as id ' + connection.threadId);

});

function showAll() {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        console.log('==================================================================');
        console.log('================= Here Are Our Items For Sale ! ==================');
        console.log('==================================================================');
        for (i = 0; i < res.length; i++) {
            console.log('Product ID #:' + res[i].item_id + '   Product Name: ' + res[i].product_name + '   Price: ' + '$' + res[i].price + '  We have ' + res[i].stock_quantity + ' left!')
        }
        console.log('==================================================================');
        //placeOrder();
    })
}
showAll();



// run the start function after the connection is made to prompt the user
// start();


//The app should then prompt users with two messages.

//* The first should ask them the ID of the product they would like to buy.
//* The second message should ask how many units of the product they would like to buy.

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt([{
            name: "itemSelection",
            type: "input",
            message: "What is the product ID number of the item you would like to purchase today?"
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


// delay the first inquiry until after the product list loads (utilizes the "delayed" module from npm)
delayed.delay(function() { start(); }, 1000)

//function print(a, b) { console.log(this[a], this[b]) }
//delayed.delay(print, 5000, { 'foo': 'Hello', 'bar': 'world' }, 'foo', 'bar')
// after 5 seconds, `print` is executed with the 3rd argument as `this` 
// and the 4th and 5th as the arguments 






//* The second message should ask how many units of the product they would like to buy.



// Once the customer has placed the order, your application should check if your
// store has enough of the product to meet the customer's request.If not, the app
// should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
// However, if your store _does_ have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.