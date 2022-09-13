function find5(numbers) {
    for (const numbersKey in numbers) {
        if (numbers[numbersKey] === 5) {
            return numbersKey;
        }
    }
    return -1;
}