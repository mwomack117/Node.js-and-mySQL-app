# Node.js-and-mySQL-app

## Overview
#### A mock amazon-like storefront app
The app will take in orders from customers and deplete stock from the store's inventory.

Upon running Node application customers will be able to view the database through the command line. User can view Id's, names, and prices of products for sale. 

User will then be promped wit two messages:
  * The first will ask them the ID of the product they would like to buy.
  * The second message will ask how many units of the product they would like to buy.
  
Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.
  * If not, the app will log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

If the store does have enough of the product, the customers order will be fulfilled.
  * The SQL database will update to reflect the remaining quantity.
  * Once the update goes through, the customer will be shown the total cost of their purchase.
