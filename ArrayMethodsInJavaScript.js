let number = [2, 4, 6, 1, 8, 3, 9];

let result = number.map((num) => num * 2);
console.log(result);

let result1 = number.filter((num) => num % 2 === 0);
console.log(result1);

let result2 = number.reduce((priv , curr) => priv + curr ,0);
console.log(result2);

let result3 = number.find((num) => num > 5);
console.log(result3);

let result4 = number.findIndex((num) => num > 6);
console.log(result4);

let result5 = number.sort();
console.log(result5);

let result6 = number.reverse();
console.log(result6);