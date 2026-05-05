const prompt = require("prompt-sync")();

const senha = 1234;

let senhaDigitada,contadora=0;

do{
    senhaDigitada = Number(prompt("Informe a senha: "));
    if(senha != senhaDigitada){
        contadora++;
        console.log("Senha incorreta, você utilizou ("+contadora+"/3)");
    }
}while(senha != senhaDigitada && contadora < 3);


if(contadora < 3){
    console.log("Bem vindo");
}else{
    console.log("Atingiu o limite de tentativas");
}


