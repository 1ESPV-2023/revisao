
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector('#btnAddTarefa');

botaoAddTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    //Recuperando todos os inputs das tarefas, um por um com getElementById()
    const inputNomeTarefa = document.getElementById("idNmTarefa");
    const inputDescricaoTarefa = document.getElementById("idDescTarefa");
    const inputDataTarefa = document.getElementById("idDtTarefa");

    // console.log(inputNomeTarefa.value);
    // console.log(inputDescricaoTarefa.value);
    // console.log(inputDataTarefa.value);

    // //Recuperando todos os inputs das tarefas de uma única vez com querySelectorAll();
    // const todosInputsDeTarefas = [...document.querySelectorAll("input")];
    // // const novoArrayDeInputs = [...todosInputsDeTarefas];
    // console.log(todosInputsDeTarefas);
    
    //Criando um Objeto para guardar os dados recuperados dos inputs

    // //Declarando o objeto
    // const tarefaObj = {
    //     nome: "",
    //     descricao:"",
    //     data:""
    // }

        //Declarando o objeto e já receebendo os dados dos inputs
        const tarefaObj = {
            nome: inputNomeTarefa.value,
            descricao:inputDescricaoTarefa.value,
            data:inputDataTarefa.value
        }

        //Inserindo os objetos na Lista
        listaTarefasArray.push(tarefaObj);

        // //Gerando uma lista de nomes de Tarefas com MAP
        // let listaNomesTarefas = listaTarefasArray.map((chapeu,index) => {
        //      if(index %2 == 0){
        //         return chapeu.nome
        //     }
        // }).filter(chapeu =>( chapeu != undefined));

        let listaNomesTarefas = listaTarefasArray.filter((chapeu,index) =>{
            return index %2 == 0
        });

        console.log(listaNomesTarefas);





    const listaTarefasUL = document.querySelector('#lista-tarefas');

    let li = document.createElement('li');

    listaTarefasUL.appendChild(li);

    let botaoExcluir = document.createElement('button');

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{
        evt.preventDefault();
        let conteudoDaLi = evt.target.parentNode.textContent.split(" x ");
        //Remove o elemento pai do botão clicado do HTML
        evt.target.parentNode.remove()
    
    });

});


//Declarando um array de Objetos de Alunos, com notas e faltas:
let alunos = [
    {"nome":"João","nota":8,"faltas":1},
    {"nome":"Maria","nota":7,"faltas":3} ,
    {"nome":"Pedro","nota":9,"faltas":4 },
    {"nome":"Ana","nota":6,"faltas":5},
    {"nome":"Carlos","nota":10,"faltas":0},
    {"nome":"Fernando","nota":5,"faltas":3},
    {"nome":"Júlio","nota":4,"faltas":0}
    ];
    
    let notasDosAlunos = alunos.map(aluno => {
        if(aluno.nota >= 6){
            return aluno.nota;
        }
    }).filter(aluno => aluno != undefined);

    console.log(notasDosAlunos);

    let mediaFinal = 0;

    notasDosAlunos.forEach((notas,index) =>{
        notas =+ notas;
        if((notasDosAlunos.length - 1) == index){
            mediaFinal = (notas/alunos.length).toFixed(2) + ' pontos';
            console.log(mediaFinal);
        }
    });

   let novaMedia = notasDosAlunos.reduce((acumulado, atual)=> acumulado + atual);
   console.log(novaMedia/notasDosAlunos.length);
    

