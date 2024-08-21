
// Passo 1 identificar o botao no html
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes"); 

//passo 2 identificar o click do usuário

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
//Passo 3 desmarcar o botõ selecionado anterior

    desativarBotaoSelecionado();
    //Passo 4 marcar o botão clicado como se estivesse selecionado
        marcarBotaoComoSelecionado(botao);


        //Passo 5, esconder a imagem selecioanada anteriormente
        esconderImagemAtiva();
        // // //Passo 6, fazer aparecer a imagem do dragão selecionado
        mostrarImagemDeFundo(indice); 


        //passo 7, esconder as informações do Balerion
        escondendoInformacoesAtivas();
        // //Passo 8, mostrar a informação correta
        mostrarInformacoes(indice);
    })
    
})

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function marcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function escondendoInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes .ativa");
    informacoesAtiva.classlist.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
