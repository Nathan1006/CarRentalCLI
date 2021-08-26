////////////////////////////////////////////////////////////////////////Simple version (conor's)
/*
// Key / Legend

index 0: Names
index 1: Company
index 2: Price per day
index 3: Days Rented

const carArray = [
    ["Camaro 2SS", "Chevy", 159, 1],
    ["Mustang GT", "Ford", 133, 3],
    ["Hellcat", "Dodge", 145, 5]
]

function rentCars(){
	console.log("Hello and welcome to our companies rental car program\n Below we will list which cars we have available and their rental prices");

	for(var i  = 0; i < carArray.length; i++){
		console.log("To rent a " + carArray[i][1] + " " + carArray[i][0] + " for " + carArray[i][2] + " day(s) will cost $" + (carArray[i][3]*carArray[i][2]));
	}

}

rentCars(); 
*/
//////////////////////////////////////////////////////Advanced version (conor's)

function car(name, company, rent) {
	this.name = name;
	this.company = company;
	this.rent = rent;
}

var companyCars = [new car("Camaro 2SS", "Chevy", 159),new car("Mustang GT", "Ford", 133), new car("Hellcat", "Dodge", 145)]

function rentCars(){
	console.log("Hello and welcome to our companies rental car program\n Below we will list which cars we have available and their rental prices");
	for(var i = 0;i < companyCars.length; i++){
		console.log((i+1) + ": " + companyCars[i].company + " " + companyCars[i].name + ": $" + companyCars[i].rent + " per day")
	}
	console.log("")
	for(var i = 0;i < companyCars.length; i++){
		var days = Math.floor(Math.random() * 10)
		console.log("To rent the " + companyCars[i].company + " " + companyCars[i].name + " for " + days + " days will cost $" + companyCars[i].rent * days);
	}
}

rentCars();
