/* 
Requirements:
This program should be built in a brand new class called CarRentalService
The class should have a at least one method where the main logic executes
The program should implement AT LEAST three loops.
The car names should be stored in String arrays.
The list of available cars should not output any currently rented cars
The program should cycle until all cars have been rented, at which point you have two choices: 
end the program, or reset the data.
*/
const readline = require('readline');
const internal = require('stream');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rentalCar = {
    myCompany : "rentMyCars",
    cars : [
        {
            model : "Chevy Camaro 2SS",
            price: 210,
            days : 0
        },
        {
            model : "Ford Mustang GT",
            price: 160,
            days : 0
        },
        {
            model : "Dodge HellCat",
            price: 135,
            days : 0
        }
    ],
    carsRented : [],
    totalCost : 0
}

function mainMenu() {
    console.log ("_________________________________________\nHello and welcome to " + rentalCar.myCompany)
    const selection = rl.question ("how may we help you today?\n 1. Rent a car\n 2. Return a car\n 3. Exit\n =>", (answer) =>{
        if (answer == 1) {
            console.log("_________________________________________\nYou chose to rent a car")
            carChoice()
        } else if (answer == 2) {
            console.log("_________________________________________\nYou chose to return a car")
            returnScreen()
        } else if (answer == 3) {
            console.log("_________________________________________\nYou chose to exit, have a great day!")
            rl.close()
        } else {
            console.log("_________________________________________\nInvalid Input")
            mainMenu()
        }
    })
}
//////have cars move locations and rename locations for clarity//////////////////////////////

function carChoice() {
    for (let i = 0; i < rentalCar.cars.length; i++) {
        const car = rentalCar.cars[i].model
        console.log ((i + 1) + ". " + car)
    }

    const selection = rl.question ("What car would you like to rent?\n=>", (answer) => {
        if (answer == 1) {
            console.log("_________________________________________\nYou chose to rent " + rentalCar.cars[0].model)
            rentalCar.carsRented.push(rentalCar.cars.shift(rentalCar.cars[0]))
            totalCost()
        } else if (answer == 2) {
            console.log("_________________________________________\nYou chose to rent " + rentalCar.cars[1].model)
            rentalCar.carsRented.push(rentalCar.cars.shift(rentalCar.cars[1]))
            totalCost()
        } else if (answer == 3) {
            console.log("_________________________________________\nYou chose to rent " + rentalCar.cars[2].model)
            rentalCar.carsRented.push(rentalCar.cars.shift(rentalCar.cars[2]))
            totalCost()
        } else {
            console.log("_________________________________________\nInvalid choice")
            mainMenu()
        }
    })
}


function totalCost() { 
    const selection = rl.question ("How many days would you like to rent?\n=> ", (answer) => {
        if(parseInt(answer) > 0) {
            for (let i = 0; i < rentalCar.carsRented.length; i++) { 
                rentalCar.cars[i].days = parseInt(answer)
                const costs = rentalCar.carsRented[i].days * rentalCar.carsRented[i].price
                rentalCar.totalCost += costs
            } 
            console.log("Your total cost for rent is : $" + parseInt(answer) * rentalCar.carsRented[0].price)
            mainMenu()
        } else {
            console.log("Invalid answer")
            mainMenu()
        }
    })
}

function returnScreen() { 
    console.log ("_________________________________________\nYou have chosen to return a car " + rentalCar.myCompany)
    for (let i = 0; i < rentalCar.carsRented.length; i++){ 
        console.log((i+1) + ". " + rentalCar.carsRented[i].model)
    } 
    const selection = rl.question ("What car would you like to return?\n=> ", (answer) => {
        if (answer  > rentalCar.carsRented.length || answer < 0) {
            console.log("incorrect selection try again")
            mainMenu()
        } else {
            rentalCar.cars.push(rentalCar.carsRented.shift(rentalCar.carsRented[parseInt(answer)]))
            mainMenu()
        }
    })
}

mainMenu()