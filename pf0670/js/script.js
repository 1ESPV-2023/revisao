// console.log("Olá Mundo!");

//Declaração de um array de nomes de alunos com 5 nomes:
// let aluno = ["João", "Maria","Pedro","Ana","Roberta"];
// //Imprimindo o conteúdo do Array na tela:
// console.log(aluno);
// //Imprimindo um elemento do array:
// console.log(`O primeiro Aluno é ${aluno[0]}`);

// //Ler o array com forEach:
// aluno.forEach( al=>{
//     //Imprime cada item do array
//     console.log(`${al} está aprendendo JavaScript`);
// });

// //Quebrando linha
// console.log("\n");

// //Ler o array com for tradicional:
// for(let i=0; i < aluno.length ;++i){
//     if(aluno[i] === "Pedro"){
//         break;
//     }else{
//         console.log("Nome do aluno " + aluno[i]);
//     }
// }

// //Quebrando linha
// console.log("\n");

// //Ler o array com for of:
// for (const al of aluno) {
//         console.log("Esse é o aluno : " + al)
// }

// //Quebrando linha
// console.log("\n");

// //Ler o array com for in:
// for (let i in aluno) {
//         console.log("Esse é o aluno : " + aluno[i])
// }


// //Declarando um array de objetos de alunos:
// let alunos = [
//     {nome:"Joao" , idade: 18},
//     {nome:"Maria", idade: 23},
//     {nome:"Jose",  idade: 47}
// ];

// //Imprimir o primeiro objeto do array de alunos:
// console.log('Primeiro Objeto');
// console.log(alunos[0].nome,alunos[0]["idade"]);
// console.log('Segundo Objeto');
// console.log(alunos[1].nome,alunos[1]["idade"]);

// console.log("\n");

// let propriedade = "idade";

// //Imprimir o array de objetos com forEach:
// alunos.forEach(aluno=>{
//     console.log(`Nome do aluno ${aluno.nome}`);
//     console.log(`Idade do aluno ${aluno[propriedade]}`);
// });