function sum(numbers) {
    let sum = 0;
    for (const numbersKey in numbers) {
        const num = numbers[numbersKey];
        if (num === 0) {
            break;
        } else {
            sum += num;
        }
    }
    return sum;
}