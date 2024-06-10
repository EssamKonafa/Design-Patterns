// Sure, I can simplify the explanation of the Factory Design Pattern with JavaScript.
// Imagine you're a chef running a restaurant. Every day, customers come in asking for different types of dishes. Now, instead of making each dish from scratch every time a customer orders it, you have a set of recipes (blueprints) that you use to make those dishes quickly and efficiently.
// In JavaScript terms, think of each dish as an object, and each recipe as a function that creates these objects. That's exactly what the Factory Design Pattern does. 
//It's like a factory that produces objects based on a specified blueprint or recipe.

// Define a factory function for creating different types of cars
function CarFactory() {}

CarFactory.prototype.createCar = function(type) {
    if (type === 'Sedan') {
        return new Sedan();
    } else if (type === 'SUV') {
        return new SUV();
    } else if (type === 'Truck') {
        return new Truck();
    }
};

// Define different types of cars
function Sedan() {
    this.type = 'Sedan';
    this.doors = 4;
}

function SUV() {
    this.type = 'SUV';
    this.doors = 5;
}

function Truck() {
    this.type = 'Truck';
    this.doors = 2;
}

const factory = new CarFactory()
const newCar = factory.createCar('SUV')
console.log(newCar);
