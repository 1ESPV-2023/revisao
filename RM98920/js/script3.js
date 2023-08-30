
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector('#btnAddTarefa');

botaoAddTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    //Recuperando todos os inputs das tarefas, um por um com getElementById()
    const inputNomeTarefa = document.getElementById("idNMTarefa");
    const inputDescricaoTarefa = document.getElementById("idDescTarefa");
    const inputDataTarefa = document.getElementById("idDtTarefa");

     console.log(inputNomeTarefa.value);
     console.log(inputDescricaoTarefa.value);
     console.log(inputDataTarefa.value);

//    //Recuperando todos os inputs das tarefas de uma única vez com querySelectorAll();
//     const todosInputsDeTarefas = [...document.querySelectorAll("input")];
//     const novoArrayDeInputs = [...todosInputsDeTarefas];
//     console.log(todosInputsDeTarefas);
    
    

    //Declarando o objeto
    const tarefaObj = {
        nome: inputNomeTarefa.value,
        descricao:inputDescricaoTarefa.value,
        data:inputDataTarefa.value,
    }


        //Inserindo os objetos na Lista
        listaTarefasArray.push(tarefaObj);

        console.log(listaTarefasArray);

    const listaTarefasUL = document.querySelector('#lista-tarefas');

    let li = document.createElement('li');

    listaTarefasUL.appendChild(li);

    let botaoExcluir = document.createElement('button');

    botaoExcluir.textContent = " excluir ";

    li.appendChild(botaoExcluir);
    

    botaoExcluir.addEventListener("click",(evt)=>{
        evt.preventDefault();
        let conteudoDaLi = evt.target.parentNode.textContent.split(" x ");
        //Remove o elemento pai do botão clicado do HTML
        evt.target.parentNode.remove()
    
    });



});
