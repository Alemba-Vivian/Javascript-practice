//writing factory function

const personFactory =(name, age)=>{
    const sayHello =()=>{
        console.log(`${name}, is ${age} years old`);
    }
    return{name, age, sayHello};
}

const vivian = personFactory("vivian alemba", 23);
console.log(vivian.name);
console.log(vivian.age);
vivian.sayHello();


const goodsFactory =(name, color, number, food)=>{
    const getGoods =()=>{
        console.log(`My name is ${name}, I love color ${color}, I am ${number} years old, my favourite dish is ${food}`);
    }
    return{name, color, number, food, getGoods};
}

const goods =goodsFactory("Maynard", "red", 34, "rice");
goods.getGoods();



//scope and closure

const FactoryFunction =string=>{
    const capitalizeString=()=>string.toUpperCase();
    const printString =()=>console.log(`---------${capitalizeString()}-----------`);
    return({printString});
}


const taco = FactoryFunction('taco');
// printString();
// capitalizeString();
// taco.capitalizeString();
taco.printString();



const counterCreator =()=>{
    let count =0;
    return()=>{
          console.log(count);
          count++;
    }
}
const counter = counterCreator();
counter();
counter();
counter();
counter();



