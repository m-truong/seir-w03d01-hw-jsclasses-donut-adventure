// console.log("Check 123");

class Hero {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m freshan than day old pizza', 'you can\'t count my calories'];
    }
    talkSass() {
        const randomNum = Math.floor(Math.random() * this.catchPhrases.length);
        console.log(this.catchPhrases[randomNum]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log('i\'m ready to rumble');
    }
}
/**
 * Create instance of Dougie
 */
const dougie = new Hero("Dougie");
console.log(dougie);
dougie.talkSass();

class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        const randomNum = Math.floor(Math.random() * this.catchPhrases.length);
        console.log(this.catchPhrases[randomNum]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
    }
}
/**
 * Created instance of Pizza Rat
 */
const pizzaRat = new Enemy("PizzaRat");
console.log(pizzaRat);
pizzaRat.talkSmack();