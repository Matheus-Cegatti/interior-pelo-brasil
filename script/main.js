function limpaCEP(cep) {
    document.querySelector(".input-cep").value = " ";
    
}

const preencheCadastro = (endereco) => {
    document.getElementById("cidade").value = endereco.localidade;  
    document.getElementById("estado-escolha").value = endereco.uf;
}
const cepSoNumeros = (numero) => /^[\d]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && cepSoNumeros(cep);



const buscaCep = async() => {
    
    
    var cep = document.querySelector(".input-cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
    
        const dados = await fetch(url);
        const endereco = await dados.json();
    
        if(endereco.hasOwnProperty("erro")) {
            alert("Cep não encontrado!")
            limpaCEP()
            
        }else {
            
            preencheCadastro(endereco)
        }
    
    }else {
        alert("Cep invalido!")
        limpaCEP()
        
    }
    
    }

document.querySelector(".input-cep").addEventListener("focusout", buscaCep);





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

    // setInterval(function() {
        
    //     proxImagem()
    // }, 3500)



