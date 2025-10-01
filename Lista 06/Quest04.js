let a = 10;
let b = 5;
let c = 20;

const maior = (a > b && a > c) ? a : (b > c ? b : c);
const menor = (a < b && a < c) ? a : (b < c ? b : c);

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
