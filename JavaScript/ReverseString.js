const input = "TheKiranAcademy";
let variable = "";

for(let i = input.length - 1; i >= 0; i--) {
    variable = variable + input[i];
}

console.log(variable);