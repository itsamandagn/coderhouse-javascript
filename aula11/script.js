/*function gerarNumero() {
return (Math.random()*20 + 30)
}
console.log (gerarNumero());*/

const aniversario = prompt("Digite o dia/mês/ano do seu aniversário").split("/");
const data = new Date(aniversario[2], aniversario[1] - 1, aniversario[0]);

if (data >= new Date(aniversario[2], 2, 21) && data <= new Date(aniversario[2], 3, 20)) {
    alert("Áries");
} else if (data >= new Date(aniversario[2], 3, 21) && data <= new Date(aniversario[2], 4, 20)) {
    alert("Touro");
} else if (data >= new Date(aniversario[2], 4, 21) && data <= new Date(aniversario[2], 5, 20)) {
    alert("Gêmeos");
} else if (data >= new Date(aniversario[2], 5, 21) && data <= new Date(aniversario[2], 6, 21)) {
    alert("Câncer");
} else if (data >= new Date(aniversario[2], 6, 22) && data <= new Date(aniversario[2], 7, 22)) {
    alert("Leão");
} else if (data >= new Date(aniversario[2], 7, 23) && data <= new Date(aniversario[2], 8, 22)) {
    alert("Virgem");
} else if (data >= new Date(aniversario[2], 8, 23) && data <= new Date(aniversario[2], 9, 22)) {
    alert("Libra");
} else if (data >= new Date(aniversario[2], 9, 23) && data <= new Date(aniversario[2], 10, 21)) {
    alert("Escorpião");
} else if (data >= new Date(aniversario[2], 10, 22) && data <= new Date(aniversario[2], 11, 21)) {
    alert("Sagitário");
} else if (data >= new Date(aniversario[2], 11, 22) && data <= new Date(aniversario[2], 0, 20)) {
    alert("Capricórnio");
} else if (data >= new Date(aniversario[2], 0, 21) && data <= new Date(aniversario[2], 1, 19)) {
    alert("Aquário");
} else if (data >= new Date(aniversario[2], 1, 20) && data <= new Date(aniversario[2], 2, 20)) {
    alert("Peixes");
} else {
    alert("Data inválida");
}


