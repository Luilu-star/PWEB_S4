const prompt = require('prompt-sync')();

let idadeUsu = prompt("Insira sua idade: ");

if (0 < idadeUsu && idadeUsu <= 12) {
    console.log("Você é uma criança");
} 
else if (12 < idadeUsu && idadeUsu <= 17) {
    console.log("Você é um adolescente");
}
else if (17 < idadeUsu && idadeUsu <= 59) {
    console.log("Você é uma adulto");
}
else if (idadeUsu > 59) {
    console.log("Você é um idoso");
} 
else {
    console.log("Insira uma idade válida");
}