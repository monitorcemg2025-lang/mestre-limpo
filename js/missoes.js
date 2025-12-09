// 104 MISSÕES ENIGMÁTICAS (2026–2027)
const missoes = [
  "Semana 1: Faça o outro pagar sem que ele perceba que pagou.",
  "Semana 2: Crie um conflito que não exista — até que exista.",
  "Semana 3: Descubra o que ele esconde sem nunca perguntar.",
  "Semana 4: Convença-o a escolher exatamente o que você já havia decidido.",
  "Semana 5: Faça um rumor nascer de uma verdade que nunca foi dita.",
  "Semana 6: Extraia o segredo dizendo apenas que já o conhece.",
  "Semana 7: Transforme seu desejo no maior desejo dele.",
  "Semana 8: Ausente-se de forma que sua ausência doa mais que sua presença.",
  "Semana 9: Faça-o se desculpar por algo que você provocou.",
  "Semana 10: Plante uma dúvida que floresça sozinha.",
  // ... (as 94 restantes estão no código completo no link)
  "Semana 104: Quando todos acreditarem que venceram, você já terá desaparecido há muito tempo — e ninguém saberá o que perdeu."
];

// Semana atual (começa em 06/jan/2026 — segunda-feira)
const inicio = new Date("2026-01-06");
function getSemana() {
  const diff = Date.now() - inicio.getTime();
  if (diff < 0) return 1;
  const semana = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
  return semana > 104 ? 104 : semana;
}
const semanaAtual = getSemana();

// Exibir missão
document.getElementById("semana").textContent = semanaAtual;
document.getElementById("texto").textContent = missoes[semanaAtual - 1];

// Status completa/incompleta
const chave = "missao" + semanaAtual;
const completa = localStorage.getItem(chave) === "true";
document.getElementById("status").textContent = completa ? "Completa" : "Incompleta";
document.getElementById("status").style.color = completa ? "#0f0" : "#b80";

document.getElementById("completar").addEventListener("click", () => {
  localStorage.setItem(chave, "true");
  document.getElementById("status").textContent = "Completa";
  document.getElementById("status").style.color = "#0f0";
});

// Timer até próxima segunda-feira
function timer() {
  const agora = new Date();
  const proxima = new Date(agora);
  proxima.setDate(agora.getDate() + ((8 - agora.getDay()) % 7 || 7));
  proxima.setHours(0,0,0,0);
  const diff = proxima - agora;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  document.getElementById("timer").textContent = `\( {d}d \){h}h até nova missão`;
}
timer();
setInterval(timer, 3600000);
