// Reverce String
let myName = "maam"
let updated = ""
for (let i = myName.length - 1; i >= 0 ; i--) {
    updated = updated + myName.charAt(i)
}

console.log("Original value is :- ", myName);
console.log("Updated value is :- ", updated);

// Count and print the vowels from the string
let conut = 0;
let vowels = ""
for (let i = 0; i < myName.length; i++) {
    
    if (myName.charAt(i) === "A" || myName.charAt(i) === "E" || myName.charAt(i) === "I" || myName.charAt(i) === "O" || myName.charAt(i) === "U" 
            || myName.charAt(i) === "a" || myName.charAt(i) === "e" || myName.charAt(i) === "i" || myName.charAt(i) === "o" || myName.charAt(i) === "u") {
        vowels = vowels + myName.charAt(i);
        conut++;
    }
}

console.log("vowels occures during execution :- ", vowels);

console.log("Count of vowels : ", conut);

//Sum of array element
let number = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
}

console.log("Sum of array element : ", sum);

// Print multiplication table 

let table = 2;

for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + i * 2);
}

//Check plendrome or not
let check = "";
for (let i = myName.length - 1; i >= 0; i--) {
    check = check + myName.charAt(i);
}

if (check === myName) {
    console.log("palendrome");
} else {
    console.log("Not palendrome");
    
}

// find maximum in array

let array = [20, 15, 40, 35, 45, 50];
let dumy = array[0]
for (let i = 0; i < array.length; i++) {
    if (dumy < array[i]) {
        dumy = array[i]
    }
}

console.log(dumy);

// Remove duplicates from array

let duplicateArray = [1, 2, 2, 3, 3, 4, 4, 5];
let newArray = []

for (let i = 0; i < duplicateArray.length; i++) {
    exists = false;
    for (let j = 0; j < newArray.length; j++) {
        if (duplicateArray[i] === newArray[j]) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        newArray[newArray.length] = duplicateArray[i];
    }
}

console.log(newArray);

//Sort array by Ascending order
let input = [6, 5, 4, 3, 2, 1];