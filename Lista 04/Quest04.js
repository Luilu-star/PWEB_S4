const prompt = require('prompt-sync')();

let deci = prompt("Decida entre [1] Soma, [2] Multiplicação, [3] Divisão e [4] Subtração: ");

let num1 = parseFloat(prompt("Insira o primeiro e o segundo número para as operações: "));
let num2 = parseFloat(prompt());

switch(Number(deci)){
    case 1:
        console.log(num1 + num2);
        break;

    case 2:
        console.log(num1 * num2);
        break;

    case 3:
        console.log(num1 / num2);
        break;

    case 4:
        console.log(num1 - num2);
        break;
    
    default:
        console.log("Insira uma decisão de número válida");
}