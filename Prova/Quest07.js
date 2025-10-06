const vendas = [
    {
        nome: "Notebook",
        preco: 2750,
        vendidos: 2
    },
    {
        nome: "Mouse",
        preco: 200,
        vendidos: 2
    },
    {
        nome: "Teclado",
        preco: 400,
        vendidos: 2
    },
    {
        nome: "Cadeira Gamer",
        preco: 1250,
        vendidos: 2
    }
]
let CompTotal = 0;

for (let i = 0; i < vendas.length; i++){
    if ((vendas[i].preco*vendas[i].vendidos) > 500){
        let VT = vendas[i].preco*vendas[i].vendidos;
        console.log(` Produto: ${vendas[i].nome}\n\n Valor total: ${VT}\n Valor com desconto: ${VT-VT*(10/100)}\n`);
        CompTotal = CompTotal + (VT-VT*(10/100));
    } else {
        let VT = vendas[i].preco*vendas[i].vendidos;
        console.log(` Produto: ${vendas[i].nome}\n\n Valor total: ${VT}\n`);
        CompTotal = CompTotal + VT;
    }
}

console.log(`Total de vendas: ${CompTotal}`);