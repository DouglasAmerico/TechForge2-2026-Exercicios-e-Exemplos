const prompt = require("prompt-sync")();

const recebeNomes = () => {
    let nome,nomes = [];
    do{
        nome = prompt("Informe o nome (caso não queira mais informar, aperte ENTER): ");
        if(nome != "") nomes.push(nome);
    }while(nome != "");

    recebeNotas(nomes);
}
const recebeNotas = (nomes) => {
    let notas = [];
    for (let index = 0; index < nomes.length; index++) {
        notas[index]= Number(prompt("Informe a nota do aluno(a) "+nomes[index]+": "));
    }
    calculoMedia(notas,nomes);
}
const calculoMedia = (notas,nomes) => {
    let media = 0;
    for (let index = 0; index < nomes.length; index++) {
        media= media + notas[index];
    }
    apresentacao(notas,nomes,media);
}
const apresentacao = (notas,nomes,media) => {
    for (let index = 0; index < nomes.length; index++) {
        console.log("O aluno(a) "+nomes[index]+" obteve a nota "+notas[index]);
    }
    console.log("A media das notas foi "+(media/nomes.length));
}

recebeNomes();