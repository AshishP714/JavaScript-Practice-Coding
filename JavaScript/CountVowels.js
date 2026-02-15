const string = "TheKiranAcademy";
let vowels = "";

for(let i = 0; i < string.length; i++) {
    let ch = string.charAt(i)
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || 
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
        vowels = vowels + ch;
    }
}

console.log(vowels);