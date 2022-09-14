const input = require('sync-input')

let hasWater = 400;
let hasMilk = 540;
let hasCoffee = 120;
let hasCups = 9;
let hasMoney = 550;

function remaining() {
    console.log(`The coffee machine has:
${hasWater} ml of water
${hasMilk} ml of milk
${hasCoffee} g of coffee beans
${hasCups} disposable cups
$${hasMoney} of money`);
}

function makeCoffee(needWater, needMilk, needCoffee, needCups, addMoney) {
    let error = false;

    if (hasWater - needWater < 0) {
        error = true;
        console.log("Sorry, not enough water!");
    }

    if (hasMilk - needMilk < 0) {
        error = true;
        console.log("Sorry, not enough milk!");
    }

    if (hasCoffee - needCoffee < 0) {
        error = true;
        console.log("Sorry, not enough coffee beans!");
    }

    if (hasCups - needCups < 0) {
        error = true;
        console.log("Sorry, not enough cups!");
    }

    if (!error) {
        hasWater -= needWater;
        hasMilk -= needMilk;
        hasCoffee -= needCoffee;
        hasCups -= needCups;
        hasMoney += addMoney

        console.log("I have enough resources, making you a coffee!");
    }
}

function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ")
    let coffeeType = Number(input());
    switch (coffeeType) {
        case 1:
            makeCoffee(250, 0, 16, 1, 4);
            break;
        case 2:
            makeCoffee(350, 75, 20, 1, 7);
            break;
        case 3:
            makeCoffee(200, 100, 12, 1, 6);
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
    while (true) {
        console.log("Write action (buy, fill, take, remaining, exit):");
        let action = input();
        console.log()
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
            case "remaining":
                remaining();
                break;
            case "exit":
                return;
            default:
                break;
        }

        console.log()
    }
}

menu();
