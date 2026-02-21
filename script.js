let btn = 0;

recuperar();

function contador() {
    let display = document.querySelector("#contador");
    btn++;
    display.innerHTML = btn;
    guardar(btn);
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

