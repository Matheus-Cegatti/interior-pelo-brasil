let contador = 0;
const imagens = document.querySelectorAll(".imagem");
const maxImagens = imagens.length;




function proxImagem() {

    imagens[contador].classList.remove("imagem-atual");

    contador++

    if (contador >= maxImagens) {
        contador = 0
    }

    imagens[contador].classList.add("imagem-atual");


    // imagens[contador]
    // console.log(contador);
    //  console.log(imagens[contador]);




}

    setInterval(function() {
        
        proxImagem()
    }, 3500)



