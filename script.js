
const cantadas = [
    "Você deve ser um Wi-Fi, porque eu estou sentindo uma conexão.",
    "Se beleza fosse tempo, você seria a eternidade.",
    "Se eu fosse um gato, passaria minhas 7 vidas com você.",
    "Você é como uma luz, ilumina meu caminho.",
    "Se você fosse um sonho, eu nunca queria acordar.",
    "Posso seguir você? Porque meus pais sempre disseram para eu seguir meus sonhos.",
    "Seu sorriso deve ser um efeito especial, porque ele ilumina meu dia.",
    "Você é mais linda que os gráficos do red dead redemption 2",
    "Seu beijo é mais gostoso do que chupar picolé na praia",
    "Ter você na minha vida é mais especial do que todos os meus planos de felicidade, porque com você eles são realidade"
];

document.getElementById("gerar").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * cantadas.length);
    document.getElementById("cantada").innerText = cantadas[randomIndex];
});
