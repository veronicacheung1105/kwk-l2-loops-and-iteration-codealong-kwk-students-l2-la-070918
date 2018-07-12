// Code your solutions in this file
// Code your solutions in this file
// var namesArray = ["Ada", "Brendan", "Ali"];

function printBadges(names){
 for (let i = 0; i < names.length; i++){
   console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
 }
 return names
}
// printBadges(namesArray)

// let tails = 0
function tailsNeverFails(){
 let tails = 0
 let number = Math.random()
 while (number >= 0.5){
   ++tails
   number = Math.random()
 }
 return `You got ${tails} tails in a row!`
}