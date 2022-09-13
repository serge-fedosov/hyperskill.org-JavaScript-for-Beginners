function newRemove(array, index, n) {
    return [].concat(array.slice(0, index), array.slice(index + n));
}