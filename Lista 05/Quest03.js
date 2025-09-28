const aulas = [
    true, false, true, true, true, false, false,
    true,true,true,true,false,true,true,
    false,false,false,true,true,false
]

function regularidade(aulas){

    presente = aulas.filter(item => item === true);

    let percentual = (presente.length/aulas.length)*100;

    percentual >= 75 ? console.log("Aluno regular") : console.log("Aluno irregular");

}

regularidade(aulas);