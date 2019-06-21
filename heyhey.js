"use strict"


// make an array of 10 grocery store items loop through that array and log each item.
// loop through a string at least 10 characters long and log each character
// make that string upper case

// Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).

// Grocery Store app
// functions:
// add to inventory
// subtract from inventory
// Notify when out of stock
// data:
// inventory
// inventory count

var dogs = ["Boxers", "Laboradors", "Boycin Spaniel", "Poodle", "ShitzZu"]

console.log (dogs)

dogs[2] = "Boykin Spaniel"

dogs[1] = "Labrador"

dogs [4] = "Shih Tzu"

console.log (dogs)

dogs [1] = "Labradors"

dogs [2] = "Boykin Spaniels"

dogs [3] = "Poodles"

dogs [4] = "Shih Tzu's"

console.log (dogs)

dogs.push ("Border Collies")
 
console.log(dogs)

dogs.push ("Grayhounds")

console.log(dogs)

dogs.pop ()

console.log (dogs)

dogs.push ("Greyhounds")

console.log (dogs)

dogs.push ("Rottweilers", "German Shepherds")

console.log (dogs)

dogs.unshift ("Bulldogs")

console.log (dogs)

dogs.unshift("Fraggles")

console.log (dogs)

dogs.shift()

console.log(dogs)

dogs.indexOf ("suuppa")

dogs.indexOf ("Poodles")

var coolDog = dogs.slice (1, 2);
