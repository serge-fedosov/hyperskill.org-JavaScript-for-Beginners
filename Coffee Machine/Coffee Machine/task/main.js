const input = require('sync-input')

let hasWater = 400;
let hasMilk = 540;
let hasCoffee = 120;
let hasCups = 9;
let hasMoney = 550;

function printHas() {
    console.log(`The coffee machine has:
${hasWater} ml of water
${hasMilk} ml of milk
${hasCoffee} g of coffee beans
${hasCups} disposable cups
$${hasMoney} of money`);
}

function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ")
    let coffeeType = Number(input());
    switch (coffeeType) {
        case 1:
            hasWater -= 250;
            hasCoffee -= 16;
            hasMoney += 4;
            hasCups -= 1;
            break;
        case 2:
            hasWater -= 350;
            hasMilk -= 75;
            hasCoffee -= 20;
            hasMoney += 7;
            hasCups -= 1;
            break;
        case 3:
            hasWater -= 200;
            hasMilk -= 100;
            hasCoffee -= 12;
            hasMoney += 6;
            hasCups -= 1;
            break;
        default:
            break;
    }
}

function fill() {
    console.log("Write how many ml of water you want to add:");
    hasWater += Number(input());

    console.log("Write how many ml of milk you want to add:");
    hasMilk += Number(input());

    console.log("Write how many grams of coffee beans you want to add:");
    hasCoffee += Number(input());

    console.log("Write how many disposable cups you want to add:");
    hasCups += Number(input());
}

function take() {
    console.log(`I gave you $${hasMoney}`);
    hasMoney = 0;
}

function menu() {
    console.log("Write action (buy, fill, take): ");
    let action = input();
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        default:
            break;
    }

    console.log()
}

printHas();
menu();
printHas();
