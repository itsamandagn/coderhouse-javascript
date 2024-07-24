function verificar(num1, num2) {
  if (num1 >= num2) {
    return num1 - num2;
  }
  else { return "não foi possível executar a operação";}

}
console.log(verificar(15, 3));

console.log(verificar(2, 10));
