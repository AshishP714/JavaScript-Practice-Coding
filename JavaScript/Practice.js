const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

let uniqueNumber = [];
let isDuplicate;

for(let i = 0; i < numbers.length; i++) {
    isDuplicate = false;

    for(let j = 0; j < uniqueNumber.length; j++) {
        if(numbers[i] === uniqueNumber[j]) {
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate) {
    uniqueNumber[uniqueNumber.length] = numbers[i];
    }
}

console.log(uniqueNumber);
console.log("Node is working perfectly!");