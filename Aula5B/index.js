const prompt = require("prompt-sync")();

let alunos = [];

const apresentacao = (aluno,i) => {
    console.log("O aluno(a) "+aluno+" esta na posição "+i);
}

for(let i=0;i<10;i++){
    alunos[i]= prompt("Informe o nome: ");
}

for(let i=0;i<10;i++){
    apresentacao(alunos[i],i);
}