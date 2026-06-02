const prompt = require("prompt-sync")();
let nomes = [];
let notas = [];

const leituraNomes = () =>{
    for(let i=0;i<5;i++){
        nomes[i] = prompt("Informe o nome: ");
    }
}

const leituraNotas = () =>{
    for(let i=0;i<5;i++){
        notas[i] = prompt("Informe a nota do(a) "+nomes[i]+": ");
    }    
}

const visualizacao = () =>{
    for(let i=0;i<5;i++){
        console.log("O(a) aluno(a) "+nomes[i]+" esta com a nota "+notas[i]);
    }
}

leituraNomes();
leituraNotas();
visualizacao();