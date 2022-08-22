const btnMenu = document.querySelector("#icone-principal")
const menu = document.querySelector(".menu")

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-desativado")
})