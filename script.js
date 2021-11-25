const colors = document.querySelector("#color-palette");
const pixels = document.querySelector("#pixel-board")
const clear = document.querySelector("#clear-board")

colors.addEventListener("click", (cor)=>{
    const selected = document.querySelector(".selected");
    selected.classList.remove('selected');
    cor.target.classList.add("selected")
})

pixels.addEventListener("click", (pix)=>{
    const selected = document.querySelector(".selected")
    const selectedPixel = pix.target
    selectedPixel.id = selected.id
})

clear.addEventListener("click", ()=>{
    const pix = document.querySelectorAll(".pixel")
    for(let i = 0; i < pix.length; i+=1){
        pix[i].id = "branco"
    }
})