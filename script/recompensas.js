
const recompensas = [
    { limite: 100, imagem: './assents/img/cat0.gif' },
    { limite: 200, imagem: './assents/img/cat1.gif' },
    { limite: 220, imagem: './assents/img/cat2.gif' }
];

function recompesar(btn) {
    for (let i = recompensas.length - 1; i >= 0; i--) {
        if (btn >= recompensas[i].limite) {
            document.querySelector("#recompensa").innerHTML = `<img src="${recompensas[i].imagem}">`;
            break;
        }
    }
}