const prompt = require("prompt-sync")();

function recebeValor(){
    return Number(prompt("Informe o valor: "));
}

function validaValores(valor){
    if(valor >= 0) return true;
    else return false;
}

function apresentacao(valor){
    console.log("O valor positivo foi: "+valor);
}

do {
    let valor = recebeValor();
    if(!validaValores(valor)){
        console.log("Informe um valor positivo");
    }
} while (!validaValores(valor));

apresentacao(valor);