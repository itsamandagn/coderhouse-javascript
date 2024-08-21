// Função para calcular quantos dias faltam para o próximo aniversário
debugger
function calcularDiasParaAniversario(dataAniversario) {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();

    // Define o próximo aniversário
    let proximoAniversario = new Date(anoAtual, dataAniversario.getMonth(), dataAniversario.getDate());

    // Se o aniversário já passou este ano, considera o próximo ano
    if (proximoAniversario < hoje) {
        proximoAniversario.setFullYear(anoAtual + 1);
    }

    // Calcula a diferença em milissegundos e converte para dias
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diferencaEmMilissegundos = proximoAniversario - hoje;
    const diasFaltando = Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos);

    return diasFaltando;
}

// Exemplo de uso da função
const dataAniversario = new Date(2024, 10, 15); // Exemplo: 15 de novembro de 2024
const diasFaltando = calcularDiasParaAniversario(dataAniversario);

console.log(`Faltam ${diasFaltando} dias para o próximo aniversário.`);


// Função para calcular a diferença entre a data do usuário e a data atual
function calcularDiferencaDatas(dataUsuario) {
    const agora = new Date();
    const diferencaEmMilissegundos = Math.abs(agora - dataUsuario);

    // Calculando a diferença em vários formatos
    const segundos = Math.floor(diferencaEmMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);

    return {
        semanas: semanas,
        dias: dias % 7,
        horas: horas % 24,
        minutos: minutos % 60,
        segundos: segundos % 60
    };
}

// Exemplo de uso da função
const dataUsuario = new Date('2023-12-31T00:00:00'); // Insira aqui a data fornecida pelo usuário
const diferenca = calcularDiferencaDatas(dataUsuario);

console.log(`Diferença entre a data informada e hoje:`);
console.log(`Semanas: ${diferenca.semanas}`);
console.log(`Dias: ${diferenca.dias}`);
console.log(`Horas: ${diferenca.horas}`);
console.log(`Minutos: ${diferenca.minutos}`);
console.log(`Segundos: ${diferenca.segundos}`);
