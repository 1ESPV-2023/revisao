
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

    console.log(listaTarefasArray);
    inputTarefa.value = "";
});