const prompt = require('prompt-sync')();

let num1 = Number(prompt("Insira 3 números para que se possa ver qual o maior entre eles: "));
let num2 = Number(prompt());
let num3 = Number(prompt());

if (num1 > num2 && num1 > num3){
    console.log("O primeiro número é o maior");

} else if (num2 > num1 && num2 > num3){
    console.log("O segundo número é o maior");

} else if (num3 > num1 && num3 > num2){
    console.log("O terceiro número é o maior");
    
}