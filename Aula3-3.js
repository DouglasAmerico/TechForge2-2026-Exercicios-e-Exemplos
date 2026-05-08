const prompt = require("prompt-sync")();

function solicitaNotaAoUsuario(){//solicita a nota ao usuario
    return Number(prompt("Informe a nota: "));
}

function verificaStatus(nota){//verifica o status da nota
    if(nota >= 7){
        return "Aprovado";
    }else if(nota >= 4){
        return "Exame";
    }else{
        return "Reprovado";
    }
}

function validacaoDeNota(){//solicita a nota,valida a nota, retorna o status ja calculado
    let nota;
    do{
        nota= solicitaNotaAoUsuario();
        if(nota > 10 || nota < 0){
            console.log("Informe uma nota valida");
        }else{
            return verificaStatus(nota);
        }

    }while(nota > 10 || nota < 0)
}

function apresentacao(resultado){//apresenta o resultado
    console.log("o aluno ficou com o resultado "+resultado);
}

apresentacao(validacaoDeNota());//chama a função validação de nota, que vai retornar o status e depois manda
                                //para a apresentação