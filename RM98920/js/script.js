let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector('#btnAddTarefa');
const botaoExcluirTarefa = document.querySelector('#btnExcluirTarefa');



botaoAddTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    const inputNomeTarefa = document.getElementById("idNMTarefa");
    const inputDescricaoTarefa = document.getElementById("idDescTarefa");
    const inputDepartamentoTarefa = document.getElementById("idDpTarefa");
    const inputimportanciaTarefa = document.getElementById("idImporTarefa");
    const inputDataTarefa = document.getElementById("idDtTarefa");
    

    const tarefaObj = {
        nome: inputNomeTarefa.value,
        descricao:inputDescricaoTarefa.value,
        departamento:inputDepartamentoTarefa.value,
        importancia:inputimportanciaTarefa.value,
        data:inputDataTarefa.value,
    }

    listaTarefasArray.push(tarefaObj);

    const listaTarefasUL = document.querySelector('#lista-tarefas');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'checkbox1';

    td1.textContent = tarefaObj.nome;
    td2.textContent = tarefaObj.descricao;
    td3.textContent = tarefaObj.departamento;
    td4.textContent = tarefaObj.importancia;
    td5.textContent = tarefaObj.data;


    listaTarefasUL.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6); 
    td6.appendChild(check);

    console.log(check.value);
    console.log(listaTarefasArray);
   
});

botaoExcluirTarefa.addEventListener("click", (evt) => {
    evt.preventDefault();

    // Percorra a lista de tarefas em ordem reversa para evitar problemas de índice ao remover elementos
    for (let i = listaTarefasArray.length - 1; i >= 0; i--) {
        const tarefa = listaTarefasArray[i];

        // Verifique se a caixa de seleção correspondente está marcada
        const checkbox = document.querySelector(`#checkbox1-${i}`);
        
        if (checkbox.checked) { // Verifique se o checkbox está marcado usando checkbox.checked
            // Remova a linha da tabela e o objeto da lista de tarefas
            listaTarefasArray.splice(i, 1);
            const trToRemove = checkbox.closest('tr');
            trToRemove.remove();
        }
    }
});

