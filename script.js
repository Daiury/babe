const cantadas = [
    "Você deve ser um Wi-Fi, porque eu estou sentindo uma conexão.",
    "Se beleza fosse tempo, você seria a eternidade.",
    "Se eu fosse um gato, passaria minhas 7 vidas com você.",
    "Você é como uma luz, ilumina meu caminho.",
    "Se você fosse um sonho, eu nunca queria acordar.",
    "Posso seguir você? Porque meus pais sempre disseram para eu seguir meus sonhos.",
    "Seu sorriso deve ser um efeito especial, porque ele ilumina meu dia."
];

document.getElementById("gerar").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * cantadas.length);
    document.getElementById("cantada").innerText = cantadas[randomIndex];
});
