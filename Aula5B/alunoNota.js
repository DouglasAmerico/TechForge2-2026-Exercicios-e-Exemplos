const prompt = require("prompt-sync")();

let alunos = [];
let notas=[];

for (let index = 0; index < 5; index++) {
    alunos[index]= prompt("Informe o nome do aluno: ");
}

for (let index = 0; index < 5; index++) {
    notas[index]= prompt("Informe a nota do aluno "+alunos[index]+": ");
}

for (let index = 0; index < 5; index++) {
    console.log("O aluno "+alunos[index]+" esta com a nota: "+notas[index]);
}