const prompt = require("prompt-sync")();

const solicitarNome = () => {
    return prompt("Informe o nome: ");
}

const solicitarNumero = () => {
    return Number(prompt("Informe o numero: "));
}

const ePar = numero => numero%2 == 0;

const apresentacao = (nome,numero,tipo) => {
    console.log(nome+" informou o numero "+numero+" e ele é "+tipo);
}

let nome = solicitarNome();
let numero = solicitarNome();
apresentacao(nome,numero,(ePar(numero)) ? "par" : "impar");