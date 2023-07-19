// declaring objects using the object literal

const myObject ={
    property:'value',
    otherProperty:77,
    "obnixious property": function(){
        return "hello world";
    },
}

// console.log(myObject.property);
// console.log(myObject["obnixious property"]);


//creating an object for a student
const student ={
    name:"Vivian Alemba",
    institution:"Pioneer International University",
    course:"Software engineering",
    "admission number":"BIT/0419/2017",
    place:"Nairobi, Kenya",
    classRep:false,

}
console.log(student);
// accessing the student properties using the dot notation
console.log(student.name);
console.log(student.classRep);
// accessing the student properties using the bracket notation
console.log(student["admission number"]);
console.log(delete student.place);
console.log(student);

// let key =prompt("what do you want to know about the student?", "course");
// alert(student[key]);

//computed properties
// let fruit =prompt("which fruit to buy?", "apple");
// let bag ={
//     [fruit]:5,
// }
// alert(bag.apple);

// let fruit =("which fruit to buy?", "apple");
// let bag={};

// bag[fruit] = 5;
// alert(bag.apple);

//using the property shorthand in real code
// function makeUser(name, age){
//     return{
//         name:name,
//         age:age,
//     }
// }
// let user =makeUser("vivian", 40);
// console.log(user);
// console.log(user.age);
// console.log(user.name);


// function createWebsite(domain, host){
//     return{
//         domain,
//         host,
//     }
// }
// let website =createWebsite("www.vivian.com", "bluehost");
// console.log(website);
// console.log(website.domain);
// console.log(website.host);


// property existence "in" operator
// let user ={};
// console.log(user.noSuchProperty === undefined);

//special operator in
// let user ={
//     name:"vivian",
//     age:25,
// };
// // let key ="age";
// console.log("age" in user);
// console.log("muone" in user);

// for---in---loop
// let user ={
//     name:"Vivian",
//     age:34,
//     isAdmin:true,
// }

// for(let key in user){
//     console.log(key);
//     console.log(user[key]);
// }

let codes ={
    "+254": "Kenya",
    "+49":"Germany",
    "+41":"Switzerland",
    "+44":"great Britain",

    "+1":"USA",
}

for(let props in codes){
    // console.log(props);
    console.log(codes[props]);
}

