function greetingMessage() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
}

function showGifts() {
    console.log("Here's the list of gifts:\n");
    for (const i in gifts) {
        console.log(`${gifts[i].id}- ${gifts[i].name}, Cost: ${gifts[i].cost} tickets`);
    }
}

function exitMessage() {
    console.log("Have a nice day!");
}

function buyAGift() {
    let number = Number(input("Enter the number of the gift you want to get: "));
    for (const i in gifts) {
        if (gifts[i].id === number) {
            tickets -= gifts[i].cost;
            console.log(`Here you go, one ${gifts[i].name}!`);
            delete gifts[i];
            break;
        }
    }
    checkTickets();
}

function addTickets() {
    let amount = Number(input("Enter the ticket amount: "));
    tickets += amount;
    checkTickets();
}

function checkTickets() {
    console.log(`Total tickets: ${tickets}`);
}

function menu() {
    while (true) {
        console.log();
        console.log("What do you want to do?");
        console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");

        let action = Number(input());
        switch (action) {
            case 1:
                buyAGift();
                break;
            case 2:
                addTickets();
                break;
            case 3:
                checkTickets();
                break;
            case 4:
                showGifts();
                break;
            default:
                return;
        }
    }
}

const input = require('sync-input');
const gifts = [{ id: 1, name: "Teddy Bear", cost: 10}, {id: 2, name: "Big Red Ball", cost: 5},
        {id: 3, name: "Huge Bear", cost: 50}, {id: 4, name: "Candy", cost: 8}, {id: 5, name: "Stuffed Tiger", cost: 15},
        {id: 6, name: "Stuffed Dragon", cost: 30}, {id: 7, name: "Skateboard", cost: 100}, {id: 8, name: "Toy Car", cost: 25},
        {id: 9, name: "Basketball", cost: 20}, {id: 10, name: "Scary Mask", cost: 75}];

let tickets = 0;

greetingMessage();
showGifts();
menu();
exitMessage();
