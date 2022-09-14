// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// console.log(`Starting to make a coffee
// Grinding coffee beans
// Boiling water
// Mixing boiled water with crushed coffee beans
// Pouring coffee into the cup
// Pouring some milk into the cup
// Coffee is ready!`);

console.log("Write how many cups of coffee you will need:");
let cups = Number(input());
let water = cups * 200;
let milk = cups * 50;
let coffee = cups * 15;

console.log(`For ${cups} cups of coffee you will need:
${water} ml of water
${milk} ml of milk
${coffee} g of coffee beans`);

