
//Variable
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
   return; 

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos=== 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
    // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor')
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        }
    }
intentos++;

limpiarCaja();
   return;
    }

    function limpiarCaja(){
        document.querySelector('#valorUsuario').value = '';

    }

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    // si el número generado esta incluido en la lista
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
// si ya sorteamos todos los  números
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
} else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        //si ese número ya existe, vamos a hacer que la funcion se llame a ella misma
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIncialies() {
asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de númeroos, generar número aleatorio y inicializar el número de intentos
    condicionesIncialies();
    // deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIncialies();