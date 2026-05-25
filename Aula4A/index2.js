const prompt = require("prompt-sync")();

const recebeValor = function(){
    return Number(prompt("Informe o valor: "));
}

const validaValores = function(valor){
    if(valor >= 0) return true;
    else return false;
}

const apresentacao = function(valor){
    console.log("O valor positivo foi: "+valor);
}

do {
    let valor = recebeValor();
    if(!validaValores(valor)){
        console.log("Informe um valor positivo");
    }
} while (!validaValores(valor));

apresentacao(valor);