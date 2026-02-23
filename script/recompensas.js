const recompensas = [
    { limite: 100, imagem: './assents/img/cat0.gif' },
    { limite: 200, imagem: './assents/img/cat1.gif' },
    { limite: 300, imagem: './assents/img/cat2.gif' },
    { limite: 400, imagem: './assents/img/cat3.gif' },
    { limite: 500, imagem: './assents/img/cat4.gif' },
    { limite: 600, imagem: './assents/img/cat5.webp' },
];

function recompesar(btn) {
    for (let i = recompensas.length - 1; i >= 0; i--) {
        if (btn >= recompensas[i].limite) {
            document.querySelector("#recompensa").innerHTML = `<img src="${recompensas[i].imagem}">`;
            if (btn === recompensas[i].limite) {
                alert(`Parabéns! Você alcançou ${btn} cliques e desbloqueou uma nova recompensa!`);
                if (btn === 600) {
                    alert("Uau! Você alcançou o limite máximo de cliques e desbloqueou todas as recompensas! Parabéns por sua dedicação e paciência!");
                }
            }
            break;
        }
    }
}