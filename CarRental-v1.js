/*
var ford = {
  "car" : "Ford Mustang GT",
  "rentCost" : 150,
  "daysRented" : 5,
}
var chevy = {
  "car" : "Chevy Camaro 2SS",
  "rentCost" : 125,
  "daysRented" : 5,
}
var dodge = {
  "car" : "Dodge Hellcat",
  "rentCost" : 173,
  "daysRented" : 5,
}
var optionsForRental = [ford, chevy, dodge];
var prices = [];

function rentalCosts(arr){
  for (let i = 0; i < arr.length; i++){
  prices.push(arr[i].rentCost * arr[i].daysRented)
  }
console.log(prices)
}
rentalCosts(optionsForRental)
*/
////////////////////////////////////////////////////////////////////////////Advanced version
// Put Car Objects into an Array with an empty array to push values into
var optionsForRental = [
  {
    "car" : "Ford Mustang GT",
    "rentCost" : 150,
    "daysRented" : 5,
  }, 
  {
    "car" : "Chevy Camaro 2SS",
    "rentCost" : 125,
    "daysRented" : 5,
  }, 
  {
    "car" : "Dodge Hellcat",
    "rentCost" : 173,
    "daysRented" : 5,
  }
];

var prices = [];
// For each car create a total rental cost
function rentalCosts(arr){
  for (let i = 0; i < arr.length; i++){
    arr[i].price = arr[i].rentCost * arr[i].daysRented // creates new property for object
    console.log ("The ", arr[i].car,"you chose to rent will cost ", arr[i].price, " dollars in total!")
  }
}
rentalCosts(optionsForRental) 
console.log(optionsForRental) // shows prices added