let word = "meni";
let length = word.length;
let sqrt = Math.sqrt(length);
let result;

if (Number.isInteger(sqrt)) {
    result = 1;
}
else {
    result = 0;
}
console.log(result);
