const input = require('sync-input');
const currencies = ["JPY", "EUR", "RUB", "USD", "GBP"];
const exchangeRate = [113.5, 0.89, 74.36, 1, 0.75];

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);


while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let operation = Number(input());
    if (operation === 1) {
    } else if (operation === 2) {
        break;
    } else {
        console.log("Unknown input");
        continue;
    }

    console.log("What do you want to convert?");
    let fromCurr = input("From: ").toUpperCase();
    if (currencies.includes(fromCurr)) {
        let toCurr = input("To: ").toUpperCase();
        if (currencies.includes(toCurr)) {
            let amount = Number(input("Amount: "));
            if (isNaN(amount)) {
                console.log("The amount has to be a number");
            } else if (amount < 1) {
                console.log("The amount cannot be less than 1");
            } else {
                const fromIndex = currencies.indexOf(fromCurr);
                const toIndex = currencies.indexOf(toCurr);
                const value = amount / exchangeRate[fromIndex] * exchangeRate[toIndex];
                console.log(`Result: ${amount} ${currencies[fromIndex]} equals ${value.toFixed(4)} ${currencies[toIndex]}`);
            }
        } else {
            console.log("Unknown currency");
        }
    } else {
        console.log("Unknown currency");
    }
}

console.log("Have a nice day!");