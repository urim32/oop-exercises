class Dog {
    constructor(name, type, age, isCuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}
const dog1 = new Dog('luki', 'Labrador', '3', 'loves');
const dog2 = new Dog('shuki', 'haski', '2', 'not loves');
const dog3 = new Dog('humit', 'mixed', '6', 'loves');
function printDog(dog) {
    for (let prop in dog) {
        console.log(`this is ${dog.name} a ${dog.type}. he is ${dog.age} years old and ${dog.isCuddle} to cuddle`);
    }
}
printDog(dog1);
printDog(dog2);
printDog(dog3);
var dog4 = new Dog('nana', 'Labrador', 2, false);
var dog5 = new Dog('biko', 'Labrador', 6, true);
var dogs = [ dog1, dog2, dog3, dog4, dog5 ];

function getDogsOfType(type, dogs) {
    let dogTypeNames = [];
    for (let i = 0; i < dogs.length; i++) {
        if (type === dogs[i].type) {
            dogTypeNames.push(dogs[i].name);
        }
    }
    return dogTypeNames;
}
let arr = getDogsOfType('Labrador', dogs);
