function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    let result = [];
    while (arr.length > 0) {
        let randomIndex = getRandom(0, arr.length - 1);
        let element = arr.splice(randomIndex, 1)[0];
        result.push(element);
    }
    return result;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));