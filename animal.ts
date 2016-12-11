/**
 * Created by maddie on 12/4/16.
 */

/*
 Create a Class Animal,
 which is Base class, should have name, distance covered by and behavior of that animal:
 Class Animal {
     name: string;
     move(distance) {};
     makeSound() {}
 ...}
 Then create 4 more class which will extend Animal class with its property and behavior.
 For example:
 Class Tiger extends Animal {...}
 */
class Animal {
    name: string;
    sound: string;
    legs: number;
    constructor(animalName: string, soundType: string, numLegs: number = 0) {
        this.name = animalName;
        this.sound = soundType;
        this.legs = numLegs;
    }
    move(distanceMoved: number = 0): void {
        console.log(`${this.name} moved ${distanceMoved} feet`);
    }
    makeSound(): void {
        console.log(`${this.legs} legged ${this.name} ${this.sound}`);
    }
}

class Tiger extends Animal {
    constructor(name: string, sound: string) {
        super(name, sound, 4);
    }
    move(distanceMoved = 500) {
        super.move(distanceMoved);
    }
}

class Snake extends Animal {
    constructor(name: string, sound: string) {
        super(name, sound);
    }
    move(distanceMoved = 5) {
        super.move(distanceMoved);
    }
}

class Horse extends Animal {
    constructor(name: string, sound: string) {
        super(name, sound, 4);
    }
    move(distanceMoved = 45) {
        super.move(distanceMoved);
    }
}

class Bird extends Animal {
    constructor(name: string, sound: string) {
        super(name, sound, 2);
    }
    move(distanceMoved = 1000) {
        super.move(distanceMoved);
    }
}

let sam = new Snake("Sammy the Python", "hisses");
let tom: Animal = new Horse("Tommy the Palomino", "neighs");
let tony = new Tiger("Tony the Tiger", "roars");
let polly = new Bird("Polly the Bird", "chirps" );

sam.move();
tom.move(34);
tony.makeSound();
polly.makeSound();