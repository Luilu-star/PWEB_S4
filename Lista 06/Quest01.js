let saldo = 2000;
let despesas = [1000, 500, 200];
let totalDesp = 0;


for(let i = 0; i < despesas.length ; i++ ){
    totalDesp = totalDesp + despesas[i];
}

totalDesp <= saldo ? console.log(`Saldo positivo: ${saldo-totalDesp}`) : console.log(`Saldo negativo: ${saldo-totalDesp}`);