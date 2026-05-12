const prompt = require("prompt-sync")();

function somar(v1,v2){
    apresentar(v1+v2);
}

function apresentar(resultado){
    console.log("O resultado é: "+resultado);    
}

function solicitar(){
    somar(Number(prompt("Informe o valor 1: ")),Number(prompt("Informe o valor 2: ")));
}

solicitar();