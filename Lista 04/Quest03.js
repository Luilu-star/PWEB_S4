const prompt = require('prompt-sync')();

let deciTemp = prompt("Antes da conversão, insira [1] para celsius e [2] para fahrenheit: ");
let graus = prompt("Quantos graus? ");

if (deciTemp == 1) {
    let convert = (graus*9/5) + 32;
    console.log(`Sua conversão de valor é: ${convert}°F`);
}

if (deciTemp == 2) {
    let convert = (graus-32) * 5/9;
    console.log(`Sua conversão de valor é: ${convert}°C`);
}
