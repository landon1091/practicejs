let scores = [1, 1, 1, 2, 2, 2, 3, 3, 3];

function innings(x, y) {
    return x + y;
};
let total = scores.reduce(innings, 0);

console.log(total);