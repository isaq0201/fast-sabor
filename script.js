const btnTema = document.getElementById("tema");
const corpo = document.body;

if(localStorage.getItem("modo-escuro") === "ativo"){
corpo.classList.add("dark");
if(btnTema) btnTema.innerHTML = "☀️";
}

if(btnTema){
btnTema.addEventListener("click", () => {
corpo.classList.toggle("dark");
if(corpo.classList.contains("dark")){
localStorage.setItem("modo-escuro", "ativo");
btnTema.innerHTML = "☀️";
}else{
localStorage.setItem("modo-escuro", "inativo");
btnTema.innerHTML = "🌙";
}
});
}

function animarContador(id, fim, duracao){
const elemento = document.getElementById(id);
if(!elemento) return;
let inicio = 0;
const incremento = fim / (duracao / 16);
const cronometro = setInterval(() => {
inicio += incremento;
if(inicio >= fim){
elemento.innerHTML = Math.floor(fim) + "+";
clearInterval(cronometro);
}else{
elemento.innerHTML = Math.floor(inicio);
}
}, 16);
}

window.addEventListener("DOMContentLoaded", () => {
animarContador("clientes", 1200, 2000);
animarContador("pedidos", 3500, 2000);
animarContador("avaliacoes", 800, 2000);
});
