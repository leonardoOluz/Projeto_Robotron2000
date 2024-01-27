const controller = document.querySelectorAll("[data-controler]");
const statistica = document.querySelectorAll("[data-estatistica]");
const robo = document.querySelectorAll("[data-robo]");
const roboAvatar = document.querySelector("[data-avatar]");

import pecas from "./pecas.js";

robo.forEach((elemento) => {
    elemento.addEventListener("click", ()=> {
        mudarAvatar(elemento.dataset.robo)
    });
});

controller.forEach((elemento) => {
    elemento.addEventListener("click", (event) => {
        manipularDados(event.target.dataset.controler, event.target.parentNode);
        modificarEstatistica(event.target.dataset.peca);
    });
});

function manipularDados(operacao, controler) {
    const peca = controler.querySelector("[data-contador]");
    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    };
};

function modificarEstatistica(peca) {
    statistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + parseInt(pecas[peca][elemento.dataset.estatistica])
    });
};

function mudarAvatar(cor){
 roboAvatar.setAttribute("src",`./img/robotrons/Robotron 2000 - ${cor}/robotron.png`);
};