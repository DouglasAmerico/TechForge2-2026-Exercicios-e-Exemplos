const prompt = require("prompt-sync")();

function soma(a,b){
    if(a == undefined || b == undefined){
        console.log("Não recebi um dos valores");
    }else{
        console.log(a+b);
    }
}

function chamada(){
    return Number(prompt("Informe o valor: "));
}

soma(chamada(),chamada());