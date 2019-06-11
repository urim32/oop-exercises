class Car {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
}

const carTools = {
    getCarColor: function(car) {
        return car.color;
    },
    getCarBrand: function(car) {
        return car.brand;
    },
    isEqual: function(car1, car2) {
        if (car1.color === car2.color && car1.brand === car2.brand) {
            return true;
        } else {
            return false;
        }
    }
};

const car1 = new Car('black', 'audi');
const car2 = new Car('black', 'audi');
const checkEqual1 = carTools.isEqual(car1, car2);
const car3 = new Car('white', 'bmw');
const car4 = new Car('blue', 'audi');
const checkEqual2 = carTools.isEqual(car3, car4);
