let salario = 4200;
let imp = 0;

if (salario <= 2000) {

    let aliquota = (0/100)
    console.log(` Salário bruto: ${salario}\n Aliquota: Isento \n Imposto: ${salario*aliquota}`);

} else if (salario <= 3500) {

    let aliquota = (7.5/100)
    console.log(` Salário bruto: ${salario}\n Aliquota: 7.5%\n Imposto: ${salario*aliquota}`);

} else if(salario <= 5000){

    let aliquota = (15/100)
    console.log(` Salário bruto: ${salario}\n Aliquota: 15%\n Imposto: ${salario*aliquota}`);
    
} else {

    let aliquota = (22.5/100)
    console.log(` Salário bruto: ${salario}\n Aliquota: 22.5%\n Imposto: ${salario*aliquota}`);
}