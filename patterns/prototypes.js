
function Person(name){
    this.name = name;

}

Person.prototype.sayName = function (){
    console.log(`Hello, i am ${this.name}`);
}


function Player(name, marker){
    
    this.name = name;
    this.marker = marker;
 
}
Player.prototype.getMarker = function (){
    console.log(`My marker is ${this.marker}`);
}
Player.prototype.goVacation = function(){
    console.log("I am going to mombasa");
}
Player.prototype.goTomovie = function(){
    console.log("watching my favourite movie tonight");
}

//using the getPrototypeOf() to get or view the current object
Object.getPrototypeOf(Player.prototype);


//making the Player object inherits from Person object
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

// Player.prototype = Person.prototype;


function Enemey(name){
    this.name =name;
    this.marker = '^';
}

// Enemey.prototype = Object.create(Person.prototype)
Object.setPrototypeOf(Enemey.prototype, Person.prototype);

Enemey.prototype.sayName = function (){
    console.log("hahahahahhahahhahahhahhahaha");
}


const player1 = new Player("Vivian", "X");
const player2 = new Player("Joy", "O");

const enemey1 = new Enemey("my name is emily");
console.log(enemey1.name);

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();




// player1.sayHello();
// player2.sayHello();

// player1.goVacation();
// player2.goVacation();

// player1.goTomovie();

// Object.getPrototypeOf(Player.prototype) === Object.prototype;
// console.log(player1.valueOf());
// console.log(player1.hasOwnProperty('valueOf'));
// console.log(Object.prototype.hasOwnProperty('valueOf'));
// console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));
// console.log(Object.getPrototypeOf(Object.prototype));