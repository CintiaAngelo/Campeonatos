"use strict";
var formCampeonato = document.getElementById("formCampeonato");
var tabelaCampeonato = document.getElementById("tbCampeonatos");
var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
function atualizarTabela() {
    tabelaCampeonato.innerHTML = "";
    campeonatos.forEach(c => {
        tabelaCampeonato.innerHTML += `
        <tr>
            <td>${c.nome}</td>
            <td>${c.categoria}</td>
            <td>${c.tipo}</td>
            <td>${c.dataInicio}</td>
            <td>${c.dataFim}</td>
        </tr>
        `;
    });
}
function salvarLocalStorage() {
    let campeonatosSalvar = JSON.stringify(campeonatos);
    localStorage.setItem("campeonatos", campeonatosSalvar);
}
function salvar(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault(); //cancelar o disparo de evento
    const novoCampeonato = {
        id: Date.now(),
        categoria: "masculino",
        dataFim: "2025-10-30",
        dataInicio: "2025-04-01",
        nome: "Brasileirão 2025",
        tipo: "pontos-corridos"
    };
    campeonatos.push(novoCampeonato);
    atualizarTabela();
}
formCampeonato.addEventListener("submit", salvar);
