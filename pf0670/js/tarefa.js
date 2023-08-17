
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