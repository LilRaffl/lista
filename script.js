//FUNÇÃO criarTarefa

const criarTarefa = (evento) =>{

    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector(`[data-list]`)
    const valor = input.value
    const tarefa = document.createElement('li')

    //criando o elemento li

    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    
    input.value = ""
    tarefa.classList.add('task')


    tarefa.appendChild(botao())
    tarefa.appendChild(botaoDeleta())

    lista.appendChild(tarefa)
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click',(criarTarefa))

const botao = () =>{
    const botaoConclui = document.createElement('button')
    botaoConclui.innerHTML = 'concluir'
    botaoConclui.classList.add('check-button')
    botaoConclui.addEventListener('click',concluirTarefa)
    
    return botaoConclui
}
 

const concluirTarefa = (evento)=>{

    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

const botaoDeleta = () => {

    const deletaBotao = document.createElement('button')
    deletaBotao.innerHTML = 'deletar'
    deletaBotao.addEventListener('click',deletarTarefa)

    return deletaBotao

}

const deletarTarefa = (evento) =>{
    const deletaBotao = evento.target
    const tarefaCompleta = deletaBotao.parentElement
    tarefaCompleta.remove()

    return deletaBotao

}


