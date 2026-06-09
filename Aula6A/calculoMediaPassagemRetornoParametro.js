const prompt = require("prompt-sync")();

const recebeNomes = () => {
    let nome, nomes = [];
    do{
        nome = prompt("Informe o nome (caso não queira mais informar, aperte ENTER): ");
        if(nome != "") nomes.push(nome);
    }while(nome != "");

    return nomes;
}
const recebeNotas = (nomes) => {
    let notas = [];
    for (let index = 0; index < nomes.length; index++) {
        notas[index]= Number(prompt("Informe a nota do aluno(a) "+nomes[index]+": "));
    }
    return notas;
}
const calculoMedia = (notas) => {
    let media = 0;
    for (let index = 0; index < notas.length; index++) {
        media= media + notas[index];
    }
    return media;
}
const apresentacao = (notas,nomes,media) => {
    for (let index = 0; index < nomes.length; index++) {
        console.log("O aluno(a) "+nomes[index]+" obteve a nota "+notas[index]);
    }
    console.log("A media das notas foi "+(media/nomes.length));
}

const main = ()=>{
    let nomes = [],notas = [],media;
    nomes = recebeNomes();
    notas = recebeNotas(nomes);
    media = calculoMedia(notas);
    apresentacao(notas,nomes,media);
}

main();