const real =  100;

const taxas = {
    dolar: 4.2,
    euro: 5.3
}

function conversao (real){
    return ` Seu valor convertido em dolar: USD: ${(real/taxas.dolar).toFixed(2)}$\n Seu valor convertido em euro: EUR: ${(real/taxas.euro).toFixed(2)}€`;
}

console.log(conversao(real));