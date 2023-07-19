// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user ={};
 user["name"] ="John";
 user["surname"] ="Smith"

 console.log(user);
 user["name"] ="Pete";
 console.log(user.name);
 delete user.name;
 console.log(user);


//  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:


function isEmpty(obj){

    for(let key in obj){
         return false;
    }
    return true;
}
let schedule = {};
console.log( isEmpty(schedule) ); // true;
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false;


//sum objects properties
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

function addSalary(){
    let salaries = {
          John: 100,
          Ann: 160,
          Pete: 130
        }

     let sum = 0;

     for(let props in salaries){
        sum += salaries[props];
     }
    return sum;
}

console.log(addSalary());


// multiply numeric values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


function multiplyNumeric(obj){


    for (let key in obj) {
        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }
      }
    
}
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

console.log(multiplyNumeric(menu));

  
 // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  console.log(multiplyNumeric(menu));


