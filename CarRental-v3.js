//first intended to create a object then changed my mind and did a constructor function thhat is incomplete. I could have solved it had i did some lookups
myObj = {
    company : "rentACar",
    cars : [
        {
            type : "Chevy Camaro 2SS",
            price: 70,
            days : 10
 
        },
        {
            type : "Ford Mustang GT",
            price: 90,
            days : 13
 
        },
        {
            type : "Dodge HellCat",
            price: 80,
            days : 9
 
        }
    ]
 
}
 
 
 
 
//blueprint
function RentalCar (type, price){
    
    this.type = type;
    this.price = price;
    this.days = 0;

    this.findCost = () => {
        return this.price * this.days
   
    }

    this.addDay = () => {
        this.days++
    }

    
}
 
//the actual object, built based on the blueprint (class / constructor)
// let myCar = new RentalCar("Dodge Hellcat", 120)

// myCar.addDay();
// myCar.addDay();
// myCar.addDay();

// console.log(myCar.findCost());

for (let i = 0; i < myObj.cars.length; i++){
    
    const car = myObj.cars[i];
    //console.log (myObj.cars[i])

    const tempCar = new RentalCar (car.type, car.price)

    //console.log("target: " + car.days)

    while (tempCar.days < car.days){
        tempCar.addDay()
    }
    //tempCar.days = car.days

    //console.log (tempCar.days);
    console.log("The ")
}