var inquirer = require('inquirer');
var mySql = require('MySql');
var delayed = require('delayed');


var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'bamazonDB' //-------- note: change to intended database ---------
});


connection.connect(function(err) {
    if (err) throw err;
    //  console.log('you are connected as id ' + connection.threadId);

});

// Running this application will first display all of the items available for sale.
// Include the ids, names, and prices of products for sale.
function showAll() {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        console.log('==================================================================');
        console.log('================= Here Are Our Items For Sale ! ==================');
        console.log('==================================================================');
        for (i = 0; i < res.length; i++) {
            console.log('Product ID #:' + res[i].item_id + '   Product Name: ' + res[i].product_name + '   Price: ' + '$' + res[i].price);
        }
        console.log('==================================================================');

    })
}
showAll();

// run the runStartShopping() function to prompt the user
// delay the first inquiry until after the product list loads (utilizes the "delayed" module from npm)
delayed.delay(function() { runStartShopping(); }, 1000)

// Welcome message to user
function runStartShopping() {
    inquirer
        .prompt({
            name: "itemSelection",
            type: "confirm",
            message: "Welcome to Bamazon! Are you ready to shop?",
            choices: [
                "Yes",
                "No",
            ]
        })
        .then(function(answer) {
            //  console.log(answer);
            switch (answer.itemSelection) {

                case true:
                    console.log("Awesome!")
                    itemSearch();
                    break;

                case false:
                    console.log("That's cool - see ya next time.");
                    break;

            }
        });
}
// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy (chosen from the displayed list).
// The second message should ask how many units of the product they would like to buy.

function itemSearch() {
    inquirer
        .prompt([{
                name: "item",
                type: "input",
                message: "What is the product ID number of the item you would like to purchase today?"
            },

            {
                name: "quantity",
                type: "input",
                message: "... and how many would you like?"
            }
        ])

    // Once the customer has placed the order

    // use the shopper's responses to the two inquiries (answer.item and answer.quantity)
    .then(function(answer) {
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, { item_id: answer.item }, function(err, res) {
            console.log(res);
            // returns this ... a single object with all data related to item_id 853...
            // [ RowDataPacket {
            //       item_id: 853,
            //       product_name: 'Flip Flops',
            //       department_name: 'Footwear',
            //       price: 22,
            //       stock_quantity: 15 } ]
            // therefore, we use use (res[0].product_name) to pull the name of the product from the 
            // first ->[0] object in the res(ponse).

            console.log("You chose " + (answer.quantity) + " of the " + (res[0].product_name));

            // check if your store has enough of the product to meet the customer's request.
            if (answer.quantity < res[0].stock_quantity) {
                console.log("We have that in stock!");
                var salesTotal = answer.quantity * res[0].price;
                console.log("Your total is $" + salesTotal + ".00  Thank you for choosing Bamazon :)");
                var newStockQuantity = (res[0].stock_quantity - answer.quantity);


                // update the database inventory (stock_quantity) 
                // You can update existing records in a table by using the Node.js MySql "UPDATE" statement:

                var sql = "UPDATE products SET stock_quantity = " + newStockQuantity + " WHERE item_id = " + answer.item;
                connection.query(sql, function(err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                    console.log(result);
                });
                // If not, the app should log a phrase like `Insufficient quantity!`,
                // and then prevent the order from going through.
            } else {
                console.log("Sorry, we don't have that many :( Please check back again tomorrow!");
            }
        })
    });
}


// However, if your store _does_ have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.