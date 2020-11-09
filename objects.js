// ======== Create Hamster Factory ====== // 
class Hamster {
    constructor(hamsterName) { // owner, name, price
        this.owner = '';
        this.name = hamsterName;
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

// ======== Create Person Factory ======= // 
class PersonFactory {
    constructor(personName) {
        this.name = personName;
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
    getWeight() {
        return this.weight;
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
    buyHamster(hamName) {
        const newHamster = new Hamster(hamName);
        newHamster.owner = this.name;
        this.hamsters.push(newHamster);
        this.mood += 10; 
        this.bank -= newHamster.getPrice(); 
    }
}

const Bob = new PersonFactory("Bob"); 
console.log(Bob); 
Bob.buyHamster("Hamtaro");
console.log(Bob.hamsters);

// ====== Create a Story for Person Class ======== // 
