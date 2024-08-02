/*let numero = parseInt(prompt("insira um número de 1 a 10"));
function exibir(numero){
if (numero>10) return console.log("número maior que 10");
for (let i=0;i<numero;i++)
    console.log (i);
  }
exibir(numero);*/

function fatorial(numero) {
    let i = 1;
    resultado = i;
    while(i<=numero){
        resultado = resultado*i;
        console.log(i)
        ++i
    }
    return resultado;
}
let res = fatorial(6);
console.log(res);
