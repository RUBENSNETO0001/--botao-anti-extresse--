let btn = 0;

recuperar();

function contador() {
    let display = document.querySelector("#contador");
    btn++;
    display.innerHTML = btn;
    guardar(btn);
    recompesar(btn);
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

function recompesar(btn) {
    if (btn >= 220) {document.querySelector("#recompensa").innerHTML = "<img src='./assents/img/cat2.gif'>";}
    else if (btn >= 200) {document.querySelector("#recompensa").innerHTML = "<img src='./assents/img/cat1.gif'>";} 
    else if (btn >= 100) {document.querySelector("#recompensa").innerHTML = "<img src='./assents/img/cat0.gif'>";}
}

