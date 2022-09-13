function greeting() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
}

function showGifts() {
    console.log("Here's the list of gifts:\n");
    console.log(`1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets`);
}

function exit() {
    console.log("Have a nice day!");
}

function buyAGift() {
    let number = Number(input("Enter the number of the gift you want to get: "));
    console.log(`Here you go, one ${gifts[number - 1]}!`);
    tickets -= giftsCosts[number - 1];
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

function work() {
    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts");

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
            break;
    }
}

const input = require('sync-input');
const gifts = ["Teddy Bear", "Big Red Ball", "Huge Bear", "Candy", "Stuffed Tiger", "Stuffed Dragon", "Skateboard",
        "Toy Car", "Basketball", "Scary Mask"];
const giftsCosts = [10, 5, 50, 8, 15, 30, 100, 25, 20, 75];
let tickets = 100;

greeting();
showGifts();
work();
exit();
