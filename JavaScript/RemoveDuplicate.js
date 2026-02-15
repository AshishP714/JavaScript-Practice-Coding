const number = [1,1,2,2,3]

let num = []

for(let i = 1; i < number.length; i++) {

    let exists = false;

    for(let j = 0; j < num.length; j++) {

        if(number[i] === num[j]) {
        exists = true;
        break
        }
    }

    if(!exists) {
        num[num.length]=number[i]
    }
}
console.log(num);