function checkEvenOrOdd(numbers) {
    for (const numbersKey in numbers) {
        const num = numbers[numbersKey];
        if (num === 0 ) {
            break;
        } else if (num % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    }
}