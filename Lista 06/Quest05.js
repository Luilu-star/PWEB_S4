const carrinho = [
    {nome: "Café", preco: 5.70, quantiaDeEstoque: 3},
    {nome: "Banana", preco: 6.0, quantiaDeEstoque: 1},
    {nome: "Pão", preco: 3.50, quantiaDeEstoque: 2}
]

function analisarcarrinho(carrinho){

    let maisCaro;

    maisCaro = carrinho.map(item => ({ preco: item.preco, nome: item.nome })).sort((a, b) => b.preco - a.preco);
    menorEstoque = carrinho.map(item => ({ quantiaDeEstoque: item.quantiaDeEstoque, nome: item.nome })).sort((a, b) => a.quantiaDeEstoque - b.quantiaDeEstoque);

    return ` O produto mais caro foi: ${maisCaro[0].nome}\n O produto com menor estoque é ${menorEstoque[0].nome}`;
}

console.log(analisarcarrinho(carrinho));