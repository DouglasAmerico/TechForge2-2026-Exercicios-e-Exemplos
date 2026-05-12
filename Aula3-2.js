const prompt = require("prompt-sync")();

function verificarMaioridade(idade){
    if(idade >= 18){
        return "Maior";
    }else{
        return "Menor";
    }
}

let idade = Number(prompt("Informe a idade: "));
console.log(" A idade informada "+idade+" é de "+verificarMaioridade(idade));