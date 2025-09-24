const prompt = require('prompt-sync')();

let clientType = Number(prompt("Digite seu tipo de cliente ([1] Estudante, [2] Aposentado, [3] Regular): "));

switch(clientType){
    case 1:
        console.log("Você tem direito a 50% de desconto");
        break;
    
    case 2:
        console.log("Você tem direito a 30% de desconto");
        break;
    
    case 3:
        console.log("Sem direito a desconto");
        break;
}