const prompt = require("prompt-sync")();

function solicitar(){
    let nome = prompt("Informe o nome: ");
    let salarioMinimo = verificarSalarioMinimo();
    let salario = verificarSalario(salarioMinimo);
    let salarioReajustado = calcularReajuste(salario);
    apresentar(nome,salario,salarioReajustado);
}

function verificarSalarioMinimo(){
    let sm;
    do{
        sm= Number(prompt("Informe o salario minimo: "));
        if(sm < 0){
            console.log("Informe um salario valido");
        }
    }while(sm < 0);
    return sm;
}

function verificarSalario(sm){
    let salario;
    do{
        salario= Number(prompt("Informe o salario: "));
        if(salario < sm){
            console.log("O salario tem que ser maior ou igual a "+sm);
        }
    }while(salario<sm);
    return salario;
}

function calcularReajuste(salario){
    if(salario >= 10000){
        return salario*1.01;
    }else if(salario >= 5000){
        return salario*1.05;
    }else if(salario >= 3000){
        return salario*1.1;
    }else{
        return salario*1.15;
    }
}

function apresentar(nome,salario,salarioReajustado){
    console.log("O empregado "+nome+" recebia "+salario+" e passara a receber "+salarioReajustado);
}

solicitar();