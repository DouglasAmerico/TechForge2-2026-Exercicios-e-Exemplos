const prompt = require("prompt-sync")();

let estoque = 120,valor;

function baixaEstoque(){
    estoque= estoque-valor;
}

function verificaEstoque(){
    if(estoque - valor >= 0){
        baixaEstoque(valor);   
    }else{
        console.log("Não pode deixar o estoque negativo");
    }
}

function solicitaValor(){
    valor = Number(prompt("Informe o valor: "));
}

function apresentarEstoque(){
    console.log("O estoque agora é: "+estoque);
}

while(estoque >= 10){
    solicitaValor();
    verificaEstoque();
    apresentarEstoque();
}