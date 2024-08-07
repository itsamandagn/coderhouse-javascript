/*let fruta = {
    cor: "laranja",
    forma: "redonda",
    peso: 5,
    capacidade: 10
}

console.log(fruta.cor);
console.log(fruta["forma"]);*/


/*function fruta (cor,forma,peso,capacidade) {
this.cor = cor;
this.forma = forma;
this.peso = peso;
this.capacidade = capacidade;
}

const fruta1 = new fruta ("laranja,redonda,5,10");

console.log(fruta1.cor);*/


/*function me (nome,idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
        
         
    }
}
const me1 = new me("Amanda",30);

me1.falar();*/


class feijao {
    constructor(nome,cor,peso,tipo) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
    }
    apresentar = ()=> {
        console.log(`O ${this.nome} é da cor ${this.cor}, pesa ${this.peso} gramas e é da especie ${this.tipo}`);
    }
    }
    const feijao1 = new feijao ("feijao","marron","3","leguminosa");
    feijao1.apresentar();