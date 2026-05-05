const prompt = require("prompt-sync")();

function soma(a,b){
    console.log(a+b);
}

let a = Number(prompt("Informe um valor: "));
let b = Number(prompt("Informe um valor: "));

soma(a,b);