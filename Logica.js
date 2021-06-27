var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;
var usados = [];
var esquinas = 0;

function dibujar() {
    for (let i = 0; i < 9; i++) {
        if (mapa[i] == 0) {
            celdaSinUso = document.getElementById("celda" + i);
        }
        if (mapa[i] == 1) {
            celdaX = document.getElementById("celda" + i);
            celdaX.innerHTML = "X";
            celdaX.style.textAlign = "center";
        }
        if (mapa[i] == 2) {
            celdaO = document.getElementById("celda" + i);
            celdaO.innerHTML = "O";
            celdaO.style.textAlign = "center";
        }
    }
}

function aleatorio() {
    let numAlet = Math.floor((Math.random() * 8) + 0);
    return numAlet;
}

function rival() {
    jugador = 2;
    numrd = aleatorio();
    dibujar();
    if ((mapa[0] == 1 || mapa[2] == 1 || mapa[6] == 1 || mapa[8] == 1) && esquinas == 0) {
        esquinas = 1;
        numrd = 4;
    }
    while (usados.includes(numrd)) {
        numrd = aleatorio();
    }
    mapa[numrd] = 2;
    usados.push(celdaSinUso);
}

function jugando(celda) {
    if (mapa[celda] == 0) {
        if (jugador == 1) {
            mapa[celda] = 1;
            usados.push(celda);
            rival();
            jugador = 1;
        }
    } else {
        mensajeError()
    }
    dibujar();
    var r = ganador();
    if(r==0){

    }else if(r==1){
        mensajeGanoJugador()
    }else if(r==2){
        mensajeMaquina()
    }else if(r==3){
        mensajEmpate()
    }
}
function ganador() {
    var numespacios = 0;
    for (let i = 0; i < 9; i++) {
        if (mapa[i] == 0) numespacios++;
    }
    if (mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] != 0) return mapa[0];
    if (mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] != 0) return mapa[3];
    if (mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] != 0) return mapa[6];

    if (mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] != 0) return mapa[0];
    if (mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] != 0) return mapa[1];
    if (mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] != 0) return mapa[2];

    if (mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] != 0) return mapa[0];
    if (mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] != 0) return mapa[2];

    if (numespacios > 0) {
        return 0;
    } else {
        return 3;
    }
}
function espacios(){
    for (let i = 0; i < 4; i++) {
        document.write("<br/>");
    }
}
console.log(espacios())