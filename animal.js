/**
 * Created by maddie on 12/4/16.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Animal = (function () {
    function Animal(animalName, soundType, numLegs) {
        if (numLegs === void 0) { numLegs = 0; }
        this.name = animalName;
        this.sound = soundType;
        this.legs = numLegs;
    }
    Animal.prototype.move = function (distanceMoved) {
        if (distanceMoved === void 0) { distanceMoved = 0; }
        console.log(this.name + " moved " + distanceMoved + " feet");
    };
    Animal.prototype.makeSound = function () {
        console.log(this.legs + " legged " + this.name + " " + this.sound);
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, sound) {
        _super.call(this, name, sound, 4);
    }
    Tiger.prototype.move = function (distanceMoved) {
        if (distanceMoved === void 0) { distanceMoved = 500; }
        _super.prototype.move.call(this, distanceMoved);
    };
    return Tiger;
}(Animal));
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name, sound) {
        _super.call(this, name, sound);
    }
    Snake.prototype.move = function (distanceMoved) {
        if (distanceMoved === void 0) { distanceMoved = 5; }
        _super.prototype.move.call(this, distanceMoved);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name, sound) {
        _super.call(this, name, sound, 4);
    }
    Horse.prototype.move = function (distanceMoved) {
        if (distanceMoved === void 0) { distanceMoved = 45; }
        _super.prototype.move.call(this, distanceMoved);
    };
    return Horse;
}(Animal));
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird(name, sound) {
        _super.call(this, name, sound, 2);
    }
    Bird.prototype.move = function (distanceMoved) {
        if (distanceMoved === void 0) { distanceMoved = 1000; }
        _super.prototype.move.call(this, distanceMoved);
    };
    return Bird;
}(Animal));
var sam = new Snake("Sammy the Python", "hisses");
var tom = new Horse("Tommy the Palomino", "neighs");
var tony = new Tiger("Tony the Tiger", "roars");
var polly = new Bird("Polly the Bird", "chirps");
sam.move();
tom.move(34);
tony.makeSound();
polly.makeSound();
