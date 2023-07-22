//initialize a constructor for a new Hero
function Hero(name, level){

    this.name = name;
    this.level = level;
}

//initialize warrior constructor
function Warrior(name, level, weapon){

    //chaining a constructor with the call method
    Hero.call(this, name, level);

    //add a new property
    this.weapon = weapon;
}

//initialize Healer constructor
function Healer(name, level, spell){
    //chaining the constructor with the call method
    Hero.call(this, name, level);

    //add a new property
    this.spell = spell;
}

//linking prototypes and adding prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function (){
    return `${this.name} says hello!`;
}
Warrior.prototype.attack = function (){
    return `${this.name} attack with the ${this.weapon}`;
}
Healer.prototype.heal = function (){
    return `${this.name} Cast ${this.spell}`;
}


//initializing individual characters
const hero1 = new Warrior("James", 4 ,"Axe");
const hero2 = new Healer("Mercy", 10, "Cure");

console.log(hero1);
console.log(hero2);

console.log(hero1.attack());
console.log(hero2.heal());

console.log(hero1.greet());
console.log(hero2.greet());