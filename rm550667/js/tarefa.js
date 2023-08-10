
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector('#btnAddTarefa');

botaoAddTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    const inputTarefa = document.querySelector('#idTarefa');

    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.querySelector('#lista-tarefas');

    let li = document.createElement('li');

    li.textContent = inputTarefa.value;

    listaTarefasUL.appendChild(li);

    let botaoExcluir = document.createElement('button');

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);
    
    botaoExcluir.addEventListener ("click", (evt)=>{
        evt.preventDefault();
        let conteudoDaLi = evt.target.parentNode.textContent.split(" x ");
        let indiceDaTarefa = listaTarefasArray.indexOf(conteudoDaLi[0]);
        listaTarefasArray.splice(indiceDaTarefa,1);

        evt.target.parentNode.remove();

    });

    console.log(listaTarefasArray);
    inputTarefa.value = "";
});