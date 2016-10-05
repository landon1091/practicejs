
let words = "Once more unto the breach!";

function scores(vowel) {
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
        return 2;
    } else {
        return 1;
    }
}

function total(x, y) {
    return x + y;
}

function splitz(word) {
    let splitWord = {
        name: word,
        letters: word.split(""),
        score: word.split("").map(score).reduce(total, 0),
    }
    return splitWord;
}

function most(x, y) {
    if (x.score > y.score) {
        return x;
    } else {
        return y;
    }
}
function alles(sentence) {
    let splitter = sentence.split(" ");
    console.log(splitter);
    let mapsplit = splitter.map(splitz);
    let rot = mapsplit.reduce(pickTheBest, mapsplit[0]);
    return rot.name + ": " + rot.score;
}
console.log(testString);
console.log(alles(testString));
