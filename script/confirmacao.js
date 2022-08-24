const btnFechar = document.querySelector(".material-icons");
const janelaFechada = document.querySelector(".sessao-fechar");

btnFechar.addEventListener("click", () => {
    janelaFechada.classList.add("confirmacao-fechada")
})