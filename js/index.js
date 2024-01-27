const controller = document.querySelectorAll("[data-controler]");
const statistica = document.querySelectorAll("[data-estatistica]");

import pecas from "./pecas.js";

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