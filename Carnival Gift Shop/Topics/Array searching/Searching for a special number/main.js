function search(numbers) {
    return numbers.find(e => e % 11 === 0);
}