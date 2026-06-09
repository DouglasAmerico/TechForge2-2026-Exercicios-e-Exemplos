const prompt = require("prompt-sync")();

let qtdAluno = prompt("Informe quantos alunos são: ");
let nomes = [],notas = [],media = 0;

const recebeNomes = () => {
    for (let index = 0; index < qtdAluno; index++) {
        nomes[index]= prompt("Informe o aluno(a) da posicação "+index+": ");}}
const recebeNotas = () => {
    for (let index = 0; index < qtdAluno; index++) {
        notas[index]= Number(prompt("Informe a nota do aluno(a) "+nomes[index]+": "));}}
const calculoMedia = () => {
    for (let index = 0; index < qtdAluno; index++) {
        media= media + notas[index];}}
const apresentacao = () => {
    for (let index = 0; index < qtdAluno; index++) {
        console.log("O aluno(a) "+nomes[index]+" obteve a nota "+notas[index]);}}

recebeNomes();
recebeNotas();
apresentacao();
calculoMedia()
console.log("A media das notas foi "+(media/qtdAluno));
