const input = require('sync-input')

console.log("Write how many ml of water the coffee machine has:");
let hasWater = Number(input());

console.log("Write how many ml of milk the coffee machine has:");
let hasMilk = Number(input());

console.log("Write how many grams of coffee beans the coffee machine has:");
let hasCoffee = Number(input());

console.log("Write how many cups of coffee you will need:");
let needCups = Number(input());

let water = Math.floor(hasWater / 200);
let milk = Math.floor(hasMilk / 50);
let coffee = Math.floor(hasCoffee / 15);
let cups = Math.min(water, milk, coffee);

if (cups < needCups) {
    console.log(`No, I can make only ${cups} cups of coffee`);
} else if (cups === needCups) {
    console.log("Yes, I can make that amount of coffee");
} else {
    console.log(`Yes, I can make that amount of coffee (and even ${cups - needCups} more than that)`);
}
