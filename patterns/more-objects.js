// const game ={
//     name:{
//         playerOne:"Vivian",
//         playerTwo:"Jack"

//     },
//     mark:{
//         markOne:"X",
//         markTwo:"O"
//     }
// }

// console.log(game.name.playerOne);
// console.log(game.mark.markOne);


const playerOneName ="Vivian";
const playerTwoName ="Jack";
const playerOneMarker ="X";
const playerTwoMarker ="O";





// const player1 ={
//     name:"Vivian",
//     mark:"X",
//     score: 1,
// }

// const player2 ={
//     name:"Jack",
//     mark:"O",
//     score:15,
// }

// function printName(player){
//     console.log(player.name);
// }

// // printName(player2);


// function gameOver(winningPlayer){
//     console.log("congratulations");
//     console.log(`${winningPlayer.name} is the winner`);

// }


// function keepScore(){
//     if(player1.score >= 10){
//         gameOver(player1);
//     }else if(player2.score >=10){
//         gameOver(player2);
//     }
// }
// keepScore();


// working with the constructors
function Player(name, marker){

    this.name =name;
    this.marker =marker;
    this.sayName = function(){
        console.log(name);
    }
}

const player1 = new Player("Vivian", "X");
const player2 = new Player("Jack","O");

player1.sayName();
player2.sayName();


//prototypes
function Student(name, grade){
    
    this.name = name;
    this.grade =grade;
    
}

Student.prototype.myName =function (){
    console.log(`My name is ${this.name} and I belong to grade ${this.grade}`);
}
Student.prototype.goToprom = function (){
    console.log("Ee.....go to prom");
}

//creating new students
const studentOne = new Student("Ronnix", 2);
const studentTwo = new Student("Mercy", 10);
// studentOne.myName();
studentTwo.myName();
studentTwo.goToprom();


//best way of setting prototypes is with object.create
function Visitors(){

}
Visitors.prototype.goToAmerica = function(){
    console.log(`Visitor is travelling to ${this.name}`);
}
Visitor1.prototype = Object.create(Visitors.prototype);
Visitor2.prototype = Object.create(Visitors.prototype);


//vistor one
function Visitor1(name){
    this.name =name;
    this.grade =8;
}
const visitor1 = new Visitor1("USA");
visitor1.goToAmerica();

//visitor two
function Visitor2(name){
    this.name =name;
    this.grade = 9;
}
const visitor2 = new Visitor2("Denmark");
visitor2.goToAmerica();


