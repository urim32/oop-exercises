class Dog {
    constructor(name, type, age, isCuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}
const dog1 = new Dog('luki', 'labrador', '3', 'loves');
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
