//more closures

const player=(name, level)=>{
   let health = level * 2;
   const getLevel =()=>level;
   const getName =()=>name;
   const die =()=>{
      
   };

   const damage = x=>{
    health -=x;

    if(health <=0){
        die();
    }
   };

   const attack =enemy =>{
    if(level < enemy.getLevel()){
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
    }

    if(level >= enemy.getLevel()){
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
    }
   }

   return{attack, damage, getLevel, getName};


}

const name1 =player("vivian", 20);
const name2 =player("joy", 10);

name1.attack(name2);