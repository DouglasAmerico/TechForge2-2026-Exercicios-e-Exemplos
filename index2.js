const prompt = require("prompt-sync")();

let valor,soma=0;

do {
   valor = Number(prompt("Informe o valor: "));
   if(valor < 1000)
        soma+= valor; 
} while (valor < 1000);

console.log("A soma dos valores informados foi: "+soma);
