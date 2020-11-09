class Hamster {
    constructor(name) { // owner, name, price
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

class PersonFactory {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = []; // this is array of diff object-types! 
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    greet() {
        console.log(this.name);
    }
    eat() {
        this.weight += 1;
        this.mood += 1;
    }
    exercise() {
        this.weight -= 1;
    }
    ageUp() {
        this.age += 1;
        this.height += 1; 
        this.weight += 1; 
        this.mood -= 1;
        this.bank += 10; 
    }
    // buyHamster(hamster) - push the hamster object onto the hamster array, 
    // increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
    buyHamster() {
        const newHamster = new Hamster();
        this.mood += 10; 
        this.bank -= newHamster.getPrice(); 
    }
}