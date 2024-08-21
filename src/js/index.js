// passo 1 - dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll(".botao");


// passo 2 - dar um jeito de identificar o clique do usuário no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarBotaoComoSelecionado(botao);

        // passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtivaAnteriormente();

        // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemFundo(indice);

        // passo 7 - esconder a informação do dragão anteriormente selecionado
        esconderInformacoesAtivasAnteriormente();

        // passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoesAtiva(indice);

    })
})

function marcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoesAtiva(indice) {
    const informacoes = document.querySelectorAll(".informacoes");
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivasAnteriormente() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemFundo(indice) {
    const imagens = document.querySelectorAll(".imagem");
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtivaAnteriormente() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
