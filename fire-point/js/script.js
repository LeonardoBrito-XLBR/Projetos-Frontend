const botao_diminuir = document.getElementById("diminuir");
const botao_aumentar = document.getElementById("aumentar");
let contagem = document.getElementById("contagem");

let pontos =0;

botao_aumentar.addEventListener ("click", () => {
    pontos++;
    contagem.textContent = pontos
})


botao_diminuir.addEventListener("click", () => {
    pontos --;
    contagem.textContent = pontos
    
}) 