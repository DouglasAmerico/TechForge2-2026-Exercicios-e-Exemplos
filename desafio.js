const prompt = require ("prompt-sync")();
let nota, nome;

function ImprimirNomeNota () {
    console.log(nome+" Sua Nota é: "+nota);
}

function solocitarNomeNota() {
    nome = prompt("Informe seu Nome: ");
    nota = Number(prompt("Informe sua nota: "));



while (nota < 0 || nota > 10) {
    console.log("Nota inválida");
    nota = Number(prompt("Digite uma nota válida: "));
}
 ImprimirNomeNota();
}
solocitarNomeNota();
 

