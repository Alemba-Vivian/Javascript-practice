// const person ={
//     // an object property can itself be an object
//     languages:{
//         first:"python",
//         second:"javascript",
//         third:"java",
//         fourth:"ruby on rails",

//     },
//     //object properties
//     name:["Vivian", "Alemba"],
//     age:35,
//     bio:function(){
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
//     },
//     introduceSelf: function(){
//         console.log(`Hi I am ${this.name[1]}`);
//     },
//     course(){
//         console.log(`I studied software engineering in pioneer international university`);

//     }
   
  
// };



// person.age =25;
// console.log(person.course());
// console.log(person.name[0]);
// console.log(person.age);
// console.log(person.languages.first);
// console.log(person.myDataName);


//object
function createPerson(name, age){
    const obj ={};

    obj.name =name;
    obj.age = age;
    obj.introduceSelf = function(){
        console.log(`Hi i am ${this.name} and i am ${this.age} years old`);
    }
    return obj;
}
const vivian = createPerson("Vivian", 25);
console.log(vivian.name);
console.log(vivian.introduceSelf());

const edwin =createPerson("Edwin", 40);
console.log(edwin.name);
console.log(edwin.introduceSelf());

const ronnix =createPerson("Ronnix", 18);
console.log(ronnix.name);
console.log(ronnix.introduceSelf());


//  constructors
function Person(name, age){
    this.name = name;
    this.age =age;
    this.introduceSelf =function(){
        console.log(`Hi i am ${this.name} and i am ${this.age} years old`);
    };

}
const joy = new Person("Joyvenda", 20);
console.log(joy.name);
console.log(joy.introduceSelf());



