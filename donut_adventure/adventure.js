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

const dougie = new Hero("Dougie");
console.log(dougie);
dougie.talkSass();

class Enemy {
    constructor () {

    }
}