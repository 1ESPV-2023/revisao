// console.log("Olá Mundo!");

//Declaração de um array de nomes de alunos com 5 nomes:
let aluno = ["João", "Maria","Pedro","Ana","Roberta"];
//Imprimindo o conteúdo do Array na tela:
console.log(aluno);
//Imprimindo um elemento do array:
console.log(`O primeiro Aluno é ${aluno[0]}`);

//Ler o array com forEach:
aluno.forEach( al=>{
    //Imprime cada item do array
    console.log(`${al} está aprendendo JavaScript`);
});
//Quebrando linha
console.log("\n");
//Ler o array com for tradicional:
for(let i=0; i < aluno.length ;++i){
    if(aluno[i] === "Pedro"){
        break;
    }else{
        console.log("Nome do aluno " + aluno[i]);
    }
}

//Quebrando linha
console.log("\n");

//Ler o array com for of:
for (const al of aluno) {
        console.log("Esse é o aluno : " + al)
}

//Quebrando linha
console.log("\n");

//Ler o array com for in:
for (let i in aluno) {
        console.log("Esse é o aluno : " + aluno[i])
}
