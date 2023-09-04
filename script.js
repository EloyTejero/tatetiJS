const casillas = [
    document.getElementById("casilla-1"), document.getElementById("casilla-2"),
    document.getElementById("casilla-3"),document.getElementById("casilla-4"),
    document.getElementById("casilla-5"),document.getElementById("casilla-6"),
    document.getElementById("casilla-7"),document.getElementById("casilla-8"),
    document.getElementById("casilla-9")];

let player = "x";

function tooglePlayer(){
    if(player=="x"){
        player = "o";
    }
    else{
        player = "x";
    }
}

function isCellEmpty(cell){
    if(cell.innerText == ""){
        return true;
    }
    return false;
}

for(let i = 0; i<casillas.length; i++){
    let casilla = casillas[i];
    casilla.addEventListener("click", casillaClickeada);
}

function casillaClickeada(){
    if(isCellEmpty(this)){
        this.innerHTML = player;
        tooglePlayer();
    }
    console.log(player);
} //añadir control para cuando ya hay un valor en la casilla y que cuando se gane ya no se pueda tocar
//osea aunque quede una casilla vacia no se pueda escribir en esta

for(let i = 0; i<casillas.length; i++){
    let texto = casillas[i].innerText;
    if(texto=="a"){
        console.log("hay a");
    }
}