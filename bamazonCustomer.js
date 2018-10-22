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
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("connected")
    showTable();
    // StaticRange();
  });

  // function to display inventory of items
  function showTable() {
    con.query("SELECT * FROM products", function(err, res){
      if (err) throw err;
      for (let i = 0; i < res.length; i++) {
        console.log(`
        item_id            product_name           department_name          price            stock_quantity
        ----------      --------------------     --------------------     --------------   ----------------------------
        ${res[i].item_id} ${res[i].product_name} ${res[i].department_name} ${res[i].price} ${res[i].stock_quantity}
        `)
        
      }
      // console.log(res[0].product_name);
    })
  }
