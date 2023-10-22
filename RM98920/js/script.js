let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector('#btnAddTarefa');
const botaoExcluirTarefa = document.querySelector('#btnExcluirTarefa');
const btnOrganizar = document.querySelector('#btnOrganizar');
const tabelaTarefas = document.querySelector('#lista-tarefas');

botaoAddTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    const inputNomeTarefa = document.getElementById("idNMTarefa");
    const inputDescricaoTarefa = document.getElementById("idDescTarefa");
    const inputDepartamentoTarefa = document.getElementById("idDpTarefa");
    const inputimportanciaTarefa = document.getElementById("idImporTarefa");
    
    const tarefaObj = {
        nome: inputNomeTarefa.value,
        descricao: inputDescricaoTarefa.value,
        departamento: inputDepartamentoTarefa.value,
        importancia: inputimportanciaTarefa.value,
    }
    listaTarefasArray.push(tarefaObj);

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const check = document.createElement('input');
    const data = document.createElement('input');

    check.type = 'checkbox';
    check.className = "checkbox-tarefa";
    check.id = `checkbox-${listaTarefasArray.length}`;

    data.type = 'date';

    td1.textContent = tarefaObj.nome;
    td2.textContent = tarefaObj.descricao;
    td3.textContent = tarefaObj.departamento;
    td4.textContent = tarefaObj.importancia;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td5.appendChild(data);
    tr.appendChild(td6); 
    td6.appendChild(check);

    tabelaTarefas.appendChild(tr);

    console.log(check.value);
    console.log(listaTarefasArray);
});

botaoExcluirTarefa.addEventListener("click", (evt) => {
    evt.preventDefault();

    const checkboxes = [...document.querySelectorAll('.checkbox-tarefa')];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            listaTarefasArray.splice(index, 1);
            const trToRemove = checkbox.closest('tr');
            trToRemove.remove();
        }
    });
});

btnOrganizar.addEventListener('click', () => {
    listaTarefasArray.sort((a, b) => b.importancia - a.importancia);
    
    // Limpar a tabela, exceto a linha de cabeçalho
    while (tabelaTarefas.children.length > 1) {
        tabelaTarefas.removeChild(tabelaTarefas.lastChild);
    }

    listaTarefasArray.forEach(tarefa => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const check = document.createElement('input');
        const data = document.createElement('input');

        check.type = 'checkbox';
        check.className = "checkbox-tarefa";
        check.id = `checkbox-${listaTarefasArray.length}`;

        data.type = 'date';

        td1.textContent = tarefa.nome;
        td2.textContent = tarefa.descricao;
        td3.textContent = tarefa.departamento;
        td4.textContent = tarefa.importancia;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        td5.appendChild(data);
        tr.appendChild(td6); 
        td6.appendChild(check);

        tabelaTarefas.appendChild(tr);
    });
});
