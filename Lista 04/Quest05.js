const prompt = require('prompt-sync')();

let number = Number(prompt("Insira um número para ver se é par ou ímpar: "));

number % 2 == 0 ? console.log("O número é par!") : console.log("O número é ímpar!");
//if reduzido a um operador ternário de condição simples.