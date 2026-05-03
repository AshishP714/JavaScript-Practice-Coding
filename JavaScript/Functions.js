// Function with parameter
function printName(printNameOf) {
    console.log(printNameOf);
}
printName("Ashish Pardeshi")

// Function without parameter
function addition() {
    console.log("Addition of :- " + (220 + 308));
}
addition();

// Function with parameter and return keyword
function substraction(a , b) {
    return a - b;
}

let subAnswer = substraction(488 , 78);
console.log("Substraction of :- " + subAnswer);

// Function with no parameter but return value
function flower() {
    return "Rose";
}
console.log(flower());


const sum = (a , b) => {
    return a + b;
}

console.log(sum(2,4));
 
let arr = [1, 2, 3, 4, 5];

const result = arr.map((val) => { return val + 1});
console.log(result);

const answer = arr.filter((val) => { return val % 2 === 0 });
console.log(answer);