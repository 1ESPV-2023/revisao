//com esse código não vai mais submeter os dados quando for clicado o botão
    let listaTarefasArray = [];

    const botaoAddTarefa = document.querySelector('#btnAddTarefa');

    botaoAddTarefa.addEventListener("click",(evt)=>{
        evt.preventDefault(); //vai pegar quem ta fazendo a ação e para o estado no tempo

        const inputTarefa = document.querySelector('#idTarefa');

        listaTarefasArray.push(inputTarefa.value);
    
        const listaTarefasUL = document.querySelector('#lista-tarefas');
    
        //listaTarefasUL.innerHTML = "<li>" + inputTarefa.value + "</li>"; //innerHTML serve pra vc add html dentro de outro html

        let li = document.createElement('li') // come essa linha podemos criar qualquer elemento, dentro da '' tem que estar o que vc quer criar

        li.textContent = inputTarefa.value;

        listaTarefasUL.appendChild(li);

        let botaoExcluir = document.createElement('button');

        botaoExcluir.textContent = " x ";

        li.appendChild(botaoExcluir);

        botaoExcluir.addEventListener("click",(evt)=>{
            evt.preventDefault();
            let conteudoDaLi = evt.target.parentNode.textContent.split(" x ");
            let indiceDaTarefa = listaTarefasArray.indexOf(conteudoDaLi[0]);
            listaTarefasArray.splice(indiceDaTarefa,1);
            //console.log(conteudoDaLi.split(" x ")[0]); //o split vai cortar o que for colocado entre (""), ele vai per correr a string e cortar o que vc pediu
            //Remove o elemento pai do botão clicado do HTML
            evt.target.parentNode.remove()
            console.log(listaTarefasArray);
        })

        console.log(listaTarefasArray);
        inputTarefa.value = "";
    });