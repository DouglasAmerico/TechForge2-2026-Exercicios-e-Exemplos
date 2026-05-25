const prompt = require("prompt-sync")();

const recebeValor = () => Number(prompt("Informe o valor: "));

const validaValores = (valor) =>{
    if(valor >= 0) return true;
    else return false;
}

const apresentacao = (valor) => {
    console.log("O valor positivo foi: "+valor);
}

let valor;
do {
    valor = recebeValor();
    if(!validaValores(valor)){
        console.log("Informe um valor positivo");
    }
} while (!validaValores(valor));

apresentacao(valor);