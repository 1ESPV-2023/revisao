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

//Declarar um array com 5 nomes de alunos:
let alunos = ["João","Ana","Carlos","Mateus","Pedro"];
console.log('\nArray original');
console.log(alunos);

//Inserindo um elemento ao final do array:
alunos.push("Luis");
console.log("\n");
console.log(alunos);

//Removendo um elemento ao final do array:
alunos.pop();
console.log("\n");
console.log(alunos);

//Inserindo um elemento no início do array:
alunos.unshift("Luis");
console.log("\n");
console.log(alunos);

//Remove um elemento do início do array:
alunos.shift("Luis");
console.log("\n");
console.log(alunos);

//Colocando os elementos em ordem alfabética:
alunos.sort();
console.log("\n");
console.log(alunos);

//Revertendo a ordem doselementos em ordem alfabética:
alunos.sort();
console.log("\n");
console.log(alunos);