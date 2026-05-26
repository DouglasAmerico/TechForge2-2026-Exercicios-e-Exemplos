const prompt = require("prompt-sync")();

const solicitaSaudacao = () => prompt("Informe o nome: ");

const verificarParImpar = numero => numero % 2 == 0 ? 'Par' : 'Ímpar';

const solcitaNumero = () => Number(prompt("Informe o numero: "));

const saudacao = (nome,parImpar) => {
    console.log("O nome informado foi "+nome+" e o numero é "+parImpar);
}

saudacao(solicitaSaudacao(),verificarParImpar(solcitaNumero()));