const alunos = [];

class Aluno{
    constructor(){
        this.nome = "";
        this.notas = [];
    }

    media(){
        [1,2,3]
        const soma = this.notas.reduce((acumulador, valorAtual) => Number(acumulador) + Number(valorAtual), 0);
        return soma / this.notas.length;
    }

    situacao(){
        if(this.media() >= 7) return "Aprovado"
        else if(this.media() < 5) return "Reprovado"
        else return "Recuperação"
    }
}

const cadastrarAlunos = () => {
    const aluno = new Aluno();
    aluno.nome = prompt("Digite o nome do aluno");
    aluno.notas = prompt(`Digite as notas do(a) ${aluno.nome} separadas por ,`).split(",");
    alunos.push(aluno);
}

const listarAlunos = () => {
    if(alunos.length < 1){
        alert("Não existe alunos cadastrados!");
        return
    }

    let relatorio = "";
    for(let aluno of alunos){
        relatorio += `
            Nome: ${aluno.nome}
            Notas: ${aluno.notas}
            Média: ${aluno.media().toFixed(2)}
            Situação: ${aluno.situacao()}
            -------------------------------
        `
    }

    alert(relatorio);
}

const excluirAluno = () => {
    const nome = prompt("Digite o nome do aluno");
    const indexAluno = alunos.findIndex((aluno) => {
        return aluno.nome === nome
    });

    if(indexAluno === -1){
        alert(`Aluno com o nome ${nome}, não está cadastrado!`);
        return;
    }

    alunos.splice(indexAluno, 1);
}

while(true){
    const opcao = Number(prompt(`
        1 - Cadastrar aluno
        2 - Excluir aluno
        3 - Listar alunos

        10 - Sair do programa
    `));
    
    if(opcao === 10){
        break
    }

    switch(opcao){
        case 1:
            cadastrarAlunos();
            break;
        case 2:
            excluirAluno();
            break;
        case 3:
            listarAlunos();
            break;
        default:
            alert("Opção inválida!");
    }
}

