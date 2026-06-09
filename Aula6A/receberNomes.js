const prompt = require("prompt-sync")();

let nomes = [],nome;

do{
    nome = prompt("Informe o nome (caso não queira mais informar, aperte ENTER): ");
    if(nome != "") nomes.push(nome);
}while(nome != "");

const listar = () => {
    for(let i=0;i<nomes.length;i++){
        console.log("O nome "+nomes[i]+" foi inserido na posição: "+i);
    }
}
listar();
console.log("o nome que será removido: "+nomes.pop());
listar();