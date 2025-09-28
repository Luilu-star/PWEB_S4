const carrinho = [
    {nome: "Café", preco: 5.70, quantidade: 2},
    {nome: "Banana", preco: 6.0, quantidade: 1},
    {nome: "Pão", preco: 3.50, quantidade: 2}
]

function analisarcarrinho(carrinho){

    let valorTotal = 0;
    let maisCaro;
    let maisBarato;

    for (let i = 0; i < carrinho.length; i++){
        valorTotal = valorTotal + carrinho[i].preco*carrinho[i].quantidade;
 
    } 

    maisCaro = carrinho.map(item => ({ preco: item.preco, nome: item.nome })).sort((a, b) => b.preco - a.preco);
    maisBarato = carrinho.map(item => ({ preco: item.preco, nome: item.nome })).sort((a, b) => b.preco - a.preco).reverse();

    return `    O valor total da sua compra R$: ${valorTotal.toFixed(2).replace(".", ",")}.
    O item mais caro no seu carrinho foi: ${maisCaro[0].nome} custando R$: ${maisCaro[0].preco.toFixed(2).replace(".", ",")}.
    O item mais barato no seu carrinho foi: ${maisBarato[0].nome} custando R$: ${maisBarato[0].preco.toFixed(2).replace(".", ",")}.`;
}

console.log(analisarcarrinho(carrinho));
