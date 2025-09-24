const prompt = require('prompt-sync')();

let notaUsu = prompt("Insira sua nota: ");

notaUsu >= 7 ? console.log("Aprovado") : console.log("Reprovado");
