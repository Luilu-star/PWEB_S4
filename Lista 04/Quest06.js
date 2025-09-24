const prompt = require('prompt-sync')();

let emailMe = "fernandonadograu@gmail.com";
let senhaMe = "1984";

let emailUsu = prompt("Insira seu e-mail: ");
let senhaUsu = prompt("Insira sua senha: ");

emailMe == emailUsu && senhaMe == senhaUsu ? console.log("Acesso permitido") : console.log("Acesso negado");