var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table")


var con = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected")
  showTable();
});

// function to display inventory of items
function showTable() {
  con.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.table([
        {
          ITEM_ID: res[i].item_id,
          PRODUCT_NAME: res[i].product_name,
          DEPARTMENT_NAME: res[i].department_name,
          PRICE: res[i].price,
          STOCK_QUANTITIY: res[i].stock_quantity
        }
      ])
    }
    inquirer
      .prompt([
        {
          name: "items",
          type: "number",
          message: "Enter Id of item you would like to buy"
        },
        {
          name: "quantity",
          type: "number",
          message: "How many would you like to buy?",
        }
      ])
      .then(function (answer) {
        var chosenItem;
        // Update stock quntity
      
        for (let i = 0; i < res.length; i++) {
          if (res[i].item_id === answer.items) {
            chosenItem = res[i];
          }

        }
        console.log(chosenItem.stock_quantity)
        if (chosenItem.stock_quantity > answer.quantity) {
          var newQuant = chosenItem.stock_quantity - answer.quantity;
          var total = chosenItem.price * answer.quantity;
          con.query(
            "UPDATE products SET ? WHERE ?", [{stock_quantity: newQuant}, {item_id: chosenItem.item_id}], function (error, result) {
              if (error) throw err;
              console.log("SUCCESSFUL PURCHASE");
              console.log(`You've been billed: $${total}.`)
              console.log(`Inventory left: ${newQuant}`);
              con.end()
            }
          );
        }
        else {
          console.log("SORRY, INSUFFICIENT INVENTORY")
          con.end()
        }
      })
      
  })
}






