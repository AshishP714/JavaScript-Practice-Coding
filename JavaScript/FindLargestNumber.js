const number = [12, 5, 27, 8];

let large = number[0];

for(let i = 0; i < number.length; i++) {
    if(number[i] > large) {
        large = number[i]
    }
}

console.log(large);
