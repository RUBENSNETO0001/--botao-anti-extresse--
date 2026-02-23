
let btn = 0;

recuperar();

function contador() {
    let display = document.querySelector("#contador");
    btn++;
    display.innerHTML = btn;
    guardar(btn);
    recompesar(btn);
    audio();
}

function guardar(a) {
    localStorage.setItem("contador", a);
}

function recuperar() {
    let salvo = localStorage.getItem("contador");
    if (salvo !== null) {
        btn = parseInt(salvo);
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelector("#contador").innerHTML = btn;
        });
    }
}
function audio() {
    const audio = new Audio('./assents/audio/clique.wav');
    audio.currentTime = 0;
    audio.play();
}

function vibrando() {
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}