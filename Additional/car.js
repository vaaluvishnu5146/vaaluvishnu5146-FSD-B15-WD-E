// Car class
class Car {
    modelName;
    brand;
    price;

    constructor(model, brand, price) {
        this.modelName = model;
        this.brand = brand;
        this.price = price;
    }
    getPrice() {
        return this.price + 10000
    }
}

// Super cars
class SuperCar extends Car {
    turbo;
    nitro;
    constructor(turbo, nitro, model, brand, price) {
        super(model, brand, price);
        this.turbo = turbo;
        this.nitro = nitro;
    }
}

// Create object of super car
const maruthi = new Car("Alto 800", "Maruthi", 700000); // #1
console.log(maruthi.getPrice());

const tata = new Car("Tiago", "Tata", 800000); // #2
console.log(tata.getPrice());

const lamborgini = new SuperCar("Turbo", "Nos", "V1", "Lamborgini", 10000000);
console.log(lamborgini);