// Character Creation Constructor
function DigitalPal(hungry, sleepy, bored, age) {

    // Set all of the character properties
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    // feed method
    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.");
        }
    }

    // sleep method
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log(`Zzzzzzzz`);
            this.sleepy = false;
            this.bored = true;
        }
        else {
            console.log("No way! I'm not tired.");
        }
    }

    // play method
    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else if (this.bored === false) {
            console.log("Not right now. Later?");
        }
    }

    // increaseAge method
    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else if (this.bored === false) {
            console.log("Not right now. Later?");
        }
    }

    // Create printStats method
    this.printStats = function () {
        console.log(
            `-----------------------------
            Hungry: ${this.hungry}
            Sleepy: ${this.sleepy}
            Bored: ${this.bored}
            Age: ${this.age}
            ------------------------------`
        );
    }

}

var dog = new DigitalPal();

 dog.feed();

// dog.sleep();

// dog.play();

dog.printStats();