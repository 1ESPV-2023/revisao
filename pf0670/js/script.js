//console.log("Ola mundo");
// Declarando um Array
let aluno = ["João", "Maria", "Pedro", "Anna"];
// Imprimindo conteudo do Array
console.log(aluno);
// Imprimindo um elemneto do Array
console.log(`O primeiro aluno é ${aluno[0]}`);

// ler o array com forEach
aluno.forEach( al=>{
    // Imprimindo cada item do array
    console.log(`${al} esta aprendendo JS`)
    return al;
});

// Quebrando linha 
console.log("\n");

for(let i=0; i < aluno.length ;++i){
    if(aluno[i] === "Pedro"){
        break;
    }else{
        console.log("Nome do aluno " +aluno[i]);
    }
}

console.log("\n");

// Ler o array com for of 
for(const al of aluno){
    console.log("Esse é o aluno : "+ al)
}

console.log("\n");

// Ler com for in usa o index
for(let i in aluno){
    console.log("Esse é o aluno : " + aluno[i])
}


var alunos = [
    {"nome":"João", idade:"18"},
    {"nome":"Maria", idade:"23"},
    {"nome":"Jose", idade:"47"},
];
console.log("\n");
// Imprimindo o primeiro objeto do array de alunos
console.log(alunos[0].idade);   