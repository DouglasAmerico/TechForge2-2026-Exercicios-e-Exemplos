const prompt = require("prompt-sync")();

const listar = (nomes,qtdAlunos)=>{
    for(let i=0;i<qtdAlunos;i++){
        console.log("O nome é: "+nomes[i]);
    }
}

const solicitacao = ()=>{
    let nomes = [];
    do{
        nome = prompt("Informe o nome (caso não queira mais informar, aperte ENTER): ");
        if(nome != "") nomes.push(nome);
    }while(nome != "");

    listar(nomes,nomes.length);
    
}

solicitacao();