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
    if (btn >= 220) {document.querySelector("#recompensa").innerHTML = "<img src='https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUybjF6eWgxczhscmZ1dWV1Y3c4cXlkZ2pkMHNndDc3dDZoZWx0dDJvZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/v3Rb7dGuvkmaRi6qei/200w.gif'>";}
    else if (btn >= 200) {document.querySelector("#recompensa").innerHTML = "<img src='./assents/img/cat0.gif'>";} 
    else if (btn >= 100) {document.querySelector("#recompensa").innerHTML = "<img src='./assents/img/cat1.gif'>";}
}

