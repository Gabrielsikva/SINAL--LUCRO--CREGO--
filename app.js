
// Exemplo de sinais simulados
const sinais = [
    { ativo: "EUR/USD", horario: "13:30", direcao: "CALL", forca: "forte" },
    { ativo: "BTC/USD", horario: "14:00", direcao: "PUT", forca: "moderada" },
    { ativo: "USD/JPY", horario: "15:15", direcao: "CALL", forca: "forte" },
];

const divSinais = document.getElementById("sinais");
divSinais.innerHTML = "";

sinais.forEach(sinal => {
    const p = document.createElement("p");
    p.textContent = `${sinal.ativo} - Horário ${sinal.horario} ${sinal.direcao} (${sinal.forca})`;
    divSinais.appendChild(p);
});
