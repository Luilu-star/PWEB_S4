const aluno = {
    nome: "Renan",
    idade: 16,
    curso: "Informática",
    notaFinal: 9
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.curso}`);
console.log(`Nota final: ${aluno.notaFinal}`)

aluno.notaFinal >= 7 ? console.log("Aluno aprovado") : console.log("Aluno reprovado");

