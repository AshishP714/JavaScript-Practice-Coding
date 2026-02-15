const words = ["apple", "orange", "apple", "banana", "orange"];

const count = {}

for(let i = 0; i < words.length; i++) {
    const word = words[i]

    if(count[word] === undefined) {
        count[word] = 1
    } else {
        count[word] = count[word] + 1
    }
}

console.log(count);