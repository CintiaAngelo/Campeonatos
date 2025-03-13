var formCampeonato = document.getElementById("formCampeonato") as HTMLFormElement;
var tabelaCampeonato = document.getElementById("tbCampeonatos") as HTMLElement;
var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");

interface Campeonato {
    id:number;
    nome:string;
    categoria:string;
    tipo:string;
    dataInicio:string;
    dataFim:string;
}
function atualizarTabela(){
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

function salvarLocalStorage(){
    let campeonatosSalvar = JSON.stringify(campeonatos)
    localStorage.setItem("campeonatos", campeonatosSalvar)
}

function salvar(event:Event){
    event?.preventDefault(); //cancelar o disparo de evento
    const novoCampeonato : Campeonato = {
        id:Date.now(),
        categoria: (document.getElementById("nome")as HTMLInputElement).value,
        dataFim: (document.getElementById("nome")as HTMLInputElement).value,
        dataInicio: (document.getElementById("nome")as HTMLInputElement).value,
        nome: (document.getElementById("nome")as HTMLInputElement).value,
        tipo: (document.getElementById("nome")as HTMLInputElement).value
    }
    campeonatos.push(novoCampeonato);
    atualizarTabela()

}

formCampeonato.addEventListener("submit", salvar)

