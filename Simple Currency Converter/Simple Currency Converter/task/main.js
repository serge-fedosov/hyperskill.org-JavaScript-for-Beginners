const input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");

console.log("Type the currency you wish to convert: USD");
const currencies = ["JPY", "EUR", "RUB", "USD", "GBP"];
const exchangeRate = [113.5, 0.89, 74.36, 1, 0.75];
let currency = input("To: ").toUpperCase();

if (currencies.includes(currency)) {
    let amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
    } else {
        const i = currencies.indexOf(currency);
        const value = amount * exchangeRate[i];
        console.log(`Result: ${amount} USD equals ${value.toFixed(4)} ${currencies[i]}`);
    }
} else {
    console.log("Unknown currency");
}
