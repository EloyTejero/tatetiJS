const casillas = [
    document.getElementById("casilla-1"), document.getElementById("casilla-2"),
    document.getElementById("casilla-3"), document.getElementById("casilla-4"),
    document.getElementById("casilla-5"), document.getElementById("casilla-6"),
    document.getElementById("casilla-7"), document.getElementById("casilla-8"),
    document.getElementById("casilla-9")];

const tateti = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];

document.getElementById("reset").addEventListener("click", reset);

let player = "x";
let gamePause = false;
inicializarCasillas();

function tooglePlayer() {
    if (player == "x") {
        player = "o";
    }
    else {
        player = "x";
    }
    document.getElementById("player").innerHTML = "Turno del Jugador: " + player;
}

function isCellEmpty(cell) {
    if (cell.innerText == "") {
        return true;
    }
    return false;
}

function reset() {
    inicializarCasillas();
    vaciarCasillas();
    tooglePlayer();
    if (player != "x") {
        tooglePlayer();
    }
}

function pauseGame() {

    for (let i = 0; i < casillas.length; i++) {
        let casilla = casillas[i];
        casilla.removeEventListener("click", casillaClickeada);
    }
}

function inicializarCasillas() {
    for (let i = 0; i < casillas.length; i++) {
        let casilla = casillas[i];
        casilla.addEventListener("click", casillaClickeada);
    }
}

function vaciarCasillas() {
    for (let i = 0; i < casillas.length; i++) {
        let casilla = casillas[i];
        casilla.innerHTML = "";
    }
}

function casillaClickeada() {
    if (isCellEmpty(this)) {
        this.innerHTML = player;
        tooglePlayer();
        main();
    }
    console.log(player);
} 

function juegoGanado() {
    for (i of tateti) {
        let contador = 0;
        let aux = casillas[i[0]].innerText;
        for (j of i) {
            if (aux == casillas[j].innerText && aux != "") {
                contador++;
            }
        }
        if (contador == 3) {
            return true;
        }
    }
    return false;
}

function ganar() {
    pauseGame();
    tooglePlayer();
    document.getElementById("player").innerHTML = "Ha ganado el jugador " + player + " Presione reset para volver a jugar";
}

function juegoEmpatado() {
    let contador = 0;

    for (let i = 0; i < casillas.length; i++) {
        let texto = casillas[i].innerText;
        if (texto != "") {
            contador++;
        }
    }
    if (contador == 9) {
        return true;
    }
    return false;
}

function empatar() {
    console.log("empatado");
    pauseGame();
    document.getElementById("player").innerHTML = "El juego ha EMPATADO presione reset para volver a jugar";
}

function main() {
    if (juegoGanado()) {
        ganar();
        return;
    }
    if (juegoEmpatado()) {
        empatar();
        return;
    }
}