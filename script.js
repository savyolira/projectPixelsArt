const selected = document.querySelector(".selected");
const color = document.querySelector(".color");
const preto = document.querySelector(".preto");
const vermelho = document.querySelector(".vermelho");
const azul = document.querySelector(".azul");
const verde = document.querySelector(".verde");
preto.classList.add("selected");

preto.addEventListener("click", function(){
    if(preto.classList.contains("selected") === true){
        preto.classList.remove("selected");
    }else{
        preto.classList.add("selected");
        vermelho.classList.remove("selected");
        azul.classList.remove("selected");
        verde.classList.remove("selected");
    }
})

vermelho.addEventListener("click", function(){
    if(vermelho.classList.contains("selected") === true){
        vermelho.classList.remove("selected");
    }else{
        vermelho.classList.add("selected");
        preto.classList.remove("selected");
        azul.classList.remove("selected");
        verde.classList.remove("selected");
    }
})

azul.addEventListener("click", function(){
    if(azul.classList.contains("selected") === true){
        azul.classList.remove("selected");
    }else{
        azul.classList.add("selected");
        preto.classList.remove("selected");
        vermelho.classList.remove("selected");
        verde.classList.remove("selected");
    }
})

verde.addEventListener("click", function(){
    if(verde.classList.contains("selected") === true){
        verde.classList.remove("selected");
    }else{
        verde.classList.add("selected");
        preto.classList.remove("selected");
        vermelho.classList.remove("selected");
        azul.classList.remove("selected");
    }
})

