let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector('#btnAddTarefa');
const botaoExcluirTarefa = document.querySelector('#btnExcluirTarefa');

function limparTabela() {
    const tabelaCorpo = document.querySelector('#lista-tarefas');
    tabelaCorpo.innerHTML = '';
}


botaoAddTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    const inputNomeTarefa = document.getElementById("idNMTarefa");
    const inputDescricaoTarefa = document.getElementById("idDescTarefa");
    const inputDepartamentoTarefa = document.getElementById("idDpTarefa");
    const inputimportanciaTarefa = document.getElementById("idImporTarefa");
    
    const tarefaObj = {
        nome: inputNomeTarefa.value,
        descricao:inputDescricaoTarefa.value,
        departamento:inputDepartamentoTarefa.value,
        importancia:inputimportanciaTarefa.value,
    }
    listaTarefasArray.push(tarefaObj);

    const listaTarefasTable = document.querySelector('#lista-tarefas');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    
    let td2 = document.createElement('td');
    td2.className = 'descricao'
    
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.className = "checkbox-tarefa";
    check.id = `checkbox-${listaTarefasArray.length}`;

    let data = document.createElement('input');
    data.type = 'date';
    data.style = 'justify-content: center; width: auto;'
    

    td1.textContent = tarefaObj.nome;
    td2.textContent = tarefaObj.descricao;
    td3.textContent = tarefaObj.departamento;
    td4.textContent = tarefaObj.importancia;
    


    listaTarefasTable.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td5.appendChild(data);
    tr.appendChild(td6); 
    td6.appendChild(check);

    console.log(check.value);
    console.log(listaTarefasArray);
   
});

botaoExcluirTarefa.addEventListener("click", (evt) => {
    evt.preventDefault();

    // Seleciona todas as checkboxes de tarefa
    const checkboxes = [...document.querySelectorAll('.checkbox-tarefa')];

    // Percorre as checkboxes e verifica se estão marcadas
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            // Remove a linha da tabela correspondente
            const trToRemove = checkbox.closest('tr');
            trToRemove.remove();
            
            // Remove a tarefa do seu array
            listaTarefasArray.splice(index, 1);
        }
    });
});

btnOrganizar.addEventListener('click', () => {
    // Classificar as tarefas por importância (do maior para o menor)
    listaTarefasArray.sort((a, b) => b.importancia - a.importancia);

    // Seleciona o corpo da tabela
    const tabelaCorpo = document.querySelector('#lista-tarefas');

    // Remove todas as linhas da tabela
    while (tabelaCorpo.firstChild) {
        tabelaCorpo.removeChild(tabelaCorpo.firstChild);
    }

    // Adiciona as linhas organizadas de volta à tabela
    listaTarefasArray.forEach(tarefa => {
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        const tdDescricao = document.createElement('td');
        const tdDepartamento = document.createElement('td');
        const tdImportancia = document.createElement('td');
        const tdData = document.createElement('td');
        const tdFeito = document.createElement('td');

        tdNome.textContent = tarefa.nome;
        tdDescricao.textContent = tarefa.descricao;
        tdDepartamento.textContent = tarefa.departamento;
        tdImportancia.textContent = tarefa.importancia;
        tdData.textContent = tarefa.data;
        tdFeito.textContent = '';

        tr.appendChild(tdNome);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdDepartamento);
        tr.appendChild(tdImportancia);
        tr.appendChild(tdData);
        tr.appendChild(tdFeito);

        tabelaCorpo.appendChild(tr);
    });
});
