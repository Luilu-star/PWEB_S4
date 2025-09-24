const prompt = require('prompt-sync')();

notaUsu = Number(prompt("Digite sua nota: "));

switch (notaUsu){
    case 10 || 9:
        console.log("A");
        break;
    
    case 8 || 7:
        console.log("B")
        break;

    case 6 || 5:
        console.log("C");
        break;
    
    case 4 || 3:
        console.log("D");
        break;

    case 2 || 1 || 0:
        console.log("F");
        break;
}