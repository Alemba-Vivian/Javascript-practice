const UIcontroller = (function (){
    //private functions and variables
    let text ="Changed the h1";
    const textChange =()=>{
        const element = document.querySelector('h1');
        element.style.color ='red';
        element.innerText = text;
    }

    //return public functions and variables
    const callTextChange =()=>{
        textChange();
        console.log(text);
    }
    return{ callTextChange};

 })();
 UIcontroller.callTextChange();





// const Calculator =(()=>{
//     const add =(a, b)=>a + b;
//     const sub =(a, b)=>a - b;
//     const mul =(a, b)=>a * b;
//     const div =(a, b)=>a / b;

//     return{add, sub, mul, div};
// })();

// console.log(Calculator.add(10,20));
// console.log(Calculator.sub(100, 2));
// console.log(Calculator.mul(2,3));
// console.log(Calculator.div(10, 5));


// const formatter =(function (){
//     let timesRun = 0;
//     const log =(message)=>console.log(`[${Date.now()}] Logger: ${message}`);
//     const setTimeRuns = ()=>{
//         log("setting times run");
//         ++timesRun;
//     }

//     const makeUpperCase =(text)=>{
//         log("making uppercase");
//         return text.toUpperCase();
        
//     }
//     return {makeUpperCase, timesRun, setTimeRuns};
// })();

// console.log(formatter.makeUpperCase("Hello"));
// console.log(formatter.timesRun);
// formatter.timesRun =10;
// console.log(formatter.timesRun);


