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

