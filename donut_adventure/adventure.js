// console.log("Check 123");

class Hero {
    constructor(name) {
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
    fight(enemy) {
        console.log('i\'m ready to rumble');
        const weaponArr = Object.keys(this.weapons);
        const randomNum = Math.floor(Math.random() * weaponArr.length);
        const currWeapon = weaponArr[randomNum];
        enemy.health -= currWeapon;
        console.log(`${enemy.name} got hit by ${currWeapon}! His health is now ${enemy.health}`);
    }
}
/**
 * Create instance of Dougie
 */
const dougie = new Hero("Dougie");
// console.log(dougie);
// dougie.talkSass();

class Enemy {
    constructor(name) {
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
    fight(enemy) {
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
        const weaponArr = Object.keys(this.weapons);
        const randomNum = Math.floor(Math.random() * weaponArr.length);
        const currWeapon = weaponArr[randomNum];
        enemy.health -= currWeapon;
        console.log(`${enemy.name} got hit by ${currWeapon}! His health is now ${enemy.health}`);
    }
}
/**
 * Created instance of Pizza Rat
 */
const pizzaRat = new Enemy("PizzaRat");
// console.log(pizzaRat);
// pizzaRat.talkSmack();

/**
 * Walking Down The Street
 */

/**
 * 1. Have Dougie talkSass
 */

dougie.talkSass();

/**
 * 2. Have PizzaRat talkSmack
 */
pizzaRat.talkSmack();

/**
 * 3. Have Dougie announceHealth
 */
dougie.announceHealth();

/**
 * 4. Have PizzaRat announceHealth
 */
pizzaRat.announceHealth();

// ======== Fight! ======== //

/**
 * 1. Have PizzaRat fight Dougie
 */
pizzaRat.fight(dougie);
/**
 * 2. Have Dougie fight Pizzar Rat
 */
dougie.fight(pizzaRat);

/** 
 * 3. Have Pizza Rat and Dougie both announceHealth to make sure their health as decreased!
 */
pizzaRat.announceHealth();
dougie.announceHealth();
