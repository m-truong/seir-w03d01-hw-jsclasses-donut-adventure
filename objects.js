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
class Person {
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
        this.bankAccount += 10;
    }
    // buyHamster(hamster) - push the hamster object onto the hamster array, 
    // increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
    buyHamster(hamName) {
        const newHamster = new Hamster(hamName);
        newHamster.owner = this.name;
        this.hamsters.push(newHamster);
        this.mood += 10;
        this.bankAccount -= newHamster.getPrice();
    }
}

const Bob = new Person("Bob");
console.log(Bob);
Bob.buyHamster("Hamtaro");
console.log(Bob.hamsters);

// ====== Create a Story for Person Class ======== // 
// WRITE LOOP-INSIDE FUCTION! 
/**
 * 1. Instantiate a new person named Timmy
 */
const Timmy = new Person("Timmy");
console.log(Timmy);

/**
 * 2. Age Timmy five-years 
 */
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
console.log(Timmy);

/**
 * 3. At this point Timmy's a little bummed. 
 * As a precocious child, he feels he's "seen it all" already. 
 * Have him eat five times.
 */
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
console.log(Timmy);

/**
 * 4. Now Timmy's a little heavier than he wants to be. 
 * Kindergarten's coming up and he wants to look good. 
 * Have him exercise five times
 */
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
console.log(Timmy);

/**
 * 5. Age Timmy 9 years
 */
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
console.log(Timmy);

/**
 * 6. Create a hamster named "Gus"
 */
/**
 * 7. Set Gus's owner to the string "Timmy"
 */
/** 
 * 8. Have Timmy "buy" Gus
 */
Timmy.buyHamster("Gus");
console.log(Timmy);
console.log(Timmy.hamsters);

/**
 * 9. Age Timmy 15 years
 */
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
console.log(Timmy);

/**
 * 10. Have Timmy eat twice
 */
Timmy.eat(); 
Timmy.eat();
console.log(Timmy);

/**
 * 11. Have Timmy exercise twice
 */
Timmy.exercise();
Timmy.exercise();
console.log(Timmy);