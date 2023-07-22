let user = {
    name:"John",
    surname:"Smith",


    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },
    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__:user,
    isAdmin:true,
};

console.log(admin.fullName);

admin.fullName = "Vivian Alemba";
console.log(admin.fullName);
console.log(user.fullName);









// let animal ={
//     eat:true,
//     walk(){
//         console.log("The animal walks proudly");

//     }
// }

// let rabbit ={
//     jump:true,
// }

// rabbit.__proto__ = animal;
// console.log(rabbit.jump);
// console.log(rabbit.eat);
// rabbit.walk();