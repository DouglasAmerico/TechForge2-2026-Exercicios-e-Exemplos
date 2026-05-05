const prompt = require("prompt-sync")();

let estoque = 200, valor;

function apresentarEstoque() {
    console.log("O estoque agora é: "+estoque);
}

function naoPodeRetirarZerado(){
    console.log("O estoque não pode ficar zerado");
}

function retirarDoEstoque(){
    estoque= estoque - valor;
}

function verificarSeFicaNegativo(){
    if(estoque - valor >= 0) retirarDoEstoque();
    else naoPodeRetirarZerado();
}

function verificarSeRecebeuValorPositivo(){
    if(valor < 0){
        console.log("Valor não pode ser negativo");
    }else{
        verificarSeFicaNegativo();
    }
}

function solicitarValor(){
    valor = Number(prompt("Informe o valor: "));
}

while (estoque >= 10) {
    solicitarValor();
    verificarSeRecebeuValorPositivo();
    apresentarEstoque();
}