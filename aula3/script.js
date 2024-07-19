var num = prompt("Insira um número de 1 a 5");
if (num == 1) {
  alert("um");
} else if (num == 2) {
  alert("dois");
} else if (num == 3) {
  alert("três");
} else if (num == 4) {
  alert("quatro");
} else if (num == 5) {
  alert("cinco");
}
else {alert("número não encontrado")};



var num = prompt("Insira um número de 1 a 100");
num === Number(num);
if (num <=10) {alert("o número é:" + " " + num + " " + "e está entre 1 e 10");}
else if(num >10 && num <=20) {alert("o número é:" + " " + num + " " + "e está entre 10 e 20");}
else if(num >20 && num <=30) {alert("o número é:" + " " + num + " " + "e está entre 20 e 30");}
else if(num >30 && num <=40) {alert("o número é:" + " " + num + " " + "e está entre 30 e 40");}
else if(num >40 && num <=50) {alert("o número é:" + " " + num + " " + "e está entre 40 e 50");}
else if(num >50 && num <=60) {alert("o número é:" + " " + num + " " + "e está entre 50 e 60");}
else if(num >60 && num <=70) {alert("o número é:" + " " + num + " " + "e está entre 60 e 70");}
else if(num >70 && num <=80) {alert("o número é:" + " " + num + " " + "e está entre 70 e 80");}
else if(num >80 && num <=90) {alert("o número é:" + " " + num + " " + "e está entre 80 e 90");}
else if(num >90 && num <=100) {alert("o número é:" + " " + num + " " + "e está entre 90 e 100");}
else {alert ("número fora do intervalo");}




var letra = prompt("insira uma letra");
if(letra ===" ") {
  alert("erro");
}
else if (letra === "a" || letra === "e" || letra === "i" ||letra === "o" || letra === "u")
{alert("a letra inserida é uma vogal")

}
    
else {alert("a letra é uma consoante");
}


