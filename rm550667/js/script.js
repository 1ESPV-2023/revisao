// console.log('oioi')

// Declaração de um array de nomes de alunos com pelo menos 5 nomes:

let aluno = ['Joáo', 'Maria', 'Pedro', 'Ana', 'Luna'];

// Imprimindo um elemento do array:

console.log(`O aluno é o ${aluno[0]}`);

// Ler o array com forEach:

aluno.forEach((unidade) => {
  console.log(` ${unidade} esta aprendendo Javascript `);
});

// ler o array com for tradicional:

for (let i = 0; i < aluno.length; ++i) {
  console.log(` ${aluno[i]} esta aprendendo Javascript `);
}

// ler o array com for of

for ( const al of aluno) {
    console.log(` ${al} esta aprendendo Javascript `);
}

// ler o array com for in

for ( let i in aluno) {
    console.log(` ${aluno[i]} esta aprendendo Javascript `);
}

// Declarando um array de objetos de alunos:

let alunos = [
  { nome: 'Joao', idade: 18 },
  { nome: 'Maria', idade: 23 },
  { nome: 'José', idade: 47 },
];

// Imprimir o primeiro objeto do array de alunos:

console.log('Primeiro objeto:');
console.log(alunos[0].nome);
console.log(alunos[1].nome,alunos[1]["idade"]);

// Imprimir o array de objetos com forEach

alunos.forEach( aluno =>{
  console.log(`Nome de Aluno: ${aluno.idade}`)
})

// Declarar um array com 5 nomes de alunos:

// está declarado acima com variavel aluno.

// Inserindo um elemento ao final do array:

aluno.push("Luis")
console.log(aluno)

// Removendo um elemento ao final do array:

aluno.pop("Luis")
console.log(aluno)

// Inserindo um elemento ao inicio do array:

aluno.unshift("Luis")
console.log(aluno)

// Removendo um elemento ao inicio do array:

aluno.shift("Luis")
console.log(aluno)

// Colocando os elementos em ordem alfabetica:

aluno.sort();
console.log(aluno);

// Revertendo os elementos em ordem alfabetica:

aluno.reverse();
console.log(aluno);

// Alterando os elementos com o metodo splice

aluno.splice(1,2, "Penelope", "Joana");
console.log(aluno);

// Alterando e excluindo os elementos com o metodo splice

aluno.splice(1,2, "Jackie");
console.log(aluno);

// Alterando e excluindo os elementos com o metodo splice

aluno.splice(2,1);
console.log(aluno);